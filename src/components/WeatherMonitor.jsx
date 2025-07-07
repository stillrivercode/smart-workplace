import React, { useState, useEffect } from 'react';
import { apiNinjas, handleApiError } from '../services/apiNinjas';
import { offices } from '../data/offices';
import '../styles/weather-monitor.css';

export const WeatherMonitor = ({ refreshInterval = 30 * 60 * 1000 }) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Fetch weather data for all offices
  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Create parallel requests for all offices
      const promises = offices.map(office => 
        apiNinjas.getWeather(office.city)
          .then(response => ({ 
            [office.id]: {
              ...response.data,
              office: office
            }
          }))
          .catch(error => {
            console.error(`Failed to fetch weather for ${office.city}:`, error);
            return { 
              [office.id]: {
                error: handleApiError(error),
                office: office
              }
            };
          })
      );
      
      const results = await Promise.all(promises);
      const combinedData = Object.assign({}, ...results);
      
      setWeatherData(combinedData);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Weather fetch failed:', error);
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  // Calculate commute impact based on temperature and conditions
  const getCommuteImpact = (temp, condition) => {
    if (temp < 0 || temp > 35) {
      return { level: 'high', text: 'Difficult' };
    }
    if (condition?.includes('rain')) {
      return { level: 'medium', text: 'Wet' };
    }
    return { level: 'low', text: 'Normal' };
  };

  // Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => Math.round(celsius * 9/5 + 32);

  // Get weather condition icon based on conditions
  const getWeatherIcon = (temp, humidity, cloudPct) => {
    if (cloudPct > 80) return '☁️';
    if (humidity > 90) return '🌧️';
    if (temp > 25) return '☀️';
    if (temp < 5) return '❄️';
    return '⛅';
  };

  // Get temperature color based on value
  const getTemperatureColor = (temp) => {
    if (temp < 10) return '#007bff'; // Blue for cold
    if (temp > 25) return '#fd7e14'; // Orange for hot
    return '#28a745'; // Green for comfortable
  };

  // Initialize component and set up refresh interval
  useEffect(() => {
    fetchWeather();
    
    const interval = setInterval(fetchWeather, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  // Loading state
  if (loading && !lastUpdated) {
    return (
      <div className="weather-monitor">
        <div className="weather-header">
          <h2>Office Weather Conditions</h2>
        </div>
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading weather data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="weather-monitor">
      <div className="weather-header">
        <h2>Office Weather Conditions</h2>
        {lastUpdated && (
          <div className="last-updated">
            Last updated: {lastUpdated.toLocaleTimeString()}
            {loading && <span className="updating"> (updating...)</span>}
          </div>
        )}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </div>

      <div className="weather-grid">
        {offices.map(office => {
          const weather = weatherData[office.id] || {};
          
          // Handle error state for individual office
          if (weather.error) {
            return (
              <div key={office.id} className="weather-card error-card">
                <h3>{office.name}</h3>
                <div className="error-state">
                  <span className="error-icon">⚠️</span>
                  <p>Data unavailable</p>
                  <small>{weather.error}</small>
                </div>
              </div>
            );
          }

          // Handle missing weather data
          if (!weather.temp && weather.temp !== 0) {
            return (
              <div key={office.id} className="weather-card loading-card">
                <h3>{office.name}</h3>
                <div className="loading-state">
                  <span className="loading-icon">⏳</span>
                  <p>Loading...</p>
                </div>
              </div>
            );
          }

          const impact = getCommuteImpact(weather.temp, weather.cloud_pct);
          const icon = getWeatherIcon(weather.temp, weather.humidity, weather.cloud_pct);
          const tempColor = getTemperatureColor(weather.temp);

          return (
            <div key={office.id} className="weather-card">
              <div className="card-header">
                <h3>{office.name}</h3>
                <span className="weather-icon">{icon}</span>
              </div>
              
              <div className="temperature-display" style={{ color: tempColor }}>
                <span className="temp-main">
                  {weather.temp}°C
                </span>
                <span className="temp-fahrenheit">
                  {celsiusToFahrenheit(weather.temp)}°F
                </span>
              </div>

              <div className="weather-details">
                <div className="detail-item">
                  <span className="detail-label">Feels like:</span>
                  <span className="detail-value">{weather.feels_like}°C</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Humidity:</span>
                  <span className="detail-value">{weather.humidity}%</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Wind:</span>
                  <span className="detail-value">{weather.wind_speed} m/s</span>
                </div>
              </div>

              <div className={`commute-impact ${impact.level}`}>
                <span className="impact-label">Commute:</span>
                <span className="impact-text">
                  {impact.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="weather-footer">
        <button 
          onClick={fetchWeather} 
          disabled={loading}
          className="refresh-button"
        >
          {loading ? 'Updating...' : 'Refresh'}
        </button>
      </div>
    </div>
  );
};