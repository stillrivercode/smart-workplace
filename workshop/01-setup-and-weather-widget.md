# Phase 1: Setup & Weather Widget (30 minutes)

## Objectives
- Set up the development environment
- Learn DDD specification writing
- Create the Office Weather Monitor widget
- Integrate with Stillriver Weather API

## Timeline
- 5 min: Project setup and API configuration
- 5 min: Review weather widget specification
- 10 min: Generate component with AI
- 10 min: Integrate API and test

## Weather Widget Specification

### Purpose
Help employees and office managers quickly see weather conditions at each office location to make decisions about commuting and office comfort.

### Requirements
- Display current weather for each office
- Show temperature in both C and F
- Include weather condition icon
- Add "Commute Impact" indicator
- Update every 30 minutes

### API Endpoint
```
GET https://api.stillriver.info/v1/weather?city={city}
```

### Visual Design
- Card layout with office name header
- Large temperature display
- Weather icon (sun/cloud/rain)
- Color coding: Blue (cold), Green (comfortable), Orange (hot)

### Acceptance Criteria
- [ ] Shows all three offices
- [ ] Updates automatically
- [ ] Handles API errors gracefully
- [ ] Mobile responsive

## Implementation Code

### API Service Setup
```javascript
// services/stillriverApi.js
import axios from 'axios';

const BASE_URL = 'https://api.stillriver.info/v1';

const client = axios.create({
  baseURL: BASE_URL
});

export const stillriverApi = {
  getWeather: (city) => client.get(`/weather?city=${city}`),
  getTimezone: (city) => client.get(`/timezone?city=${city}`),
  getAirQuality: (city) => client.get(`/airquality?city=${city}`)
};
```

### Weather Monitor Component
```javascript
// components/WeatherMonitor.jsx
import React, { useState, useEffect } from 'react';
import { stillriverApi } from '../services/stillriverApi';
import { offices } from '../data/offices';

export const WeatherMonitor = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const promises = offices.map(office => 
          stillriverApi.getWeather(office.city)
            .then(res => ({ [office.id]: res.data }))
        );
        
        const results = await Promise.all(promises);
        const combined = Object.assign({}, ...results);
        setWeatherData(combined);
      } catch (error) {
        console.error('Weather fetch failed:', error);
      }
      setLoading(false);
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getCommuteImpact = (temp, condition) => {
    if (temp < 0 || temp > 35) return { level: 'high', text: 'Difficult' };
    if (condition?.includes('rain')) return { level: 'medium', text: 'Wet' };
    return { level: 'low', text: 'Normal' };
  };

  if (loading) return <div className="loading">Loading weather...</div>;

  return (
    <div className="weather-monitor">
      <h2>Office Weather Conditions</h2>
      <div className="weather-grid">
        {offices.map(office => {
          const weather = weatherData[office.id] || {};
          const impact = getCommuteImpact(weather.temp, weather.cloud_pct);
          
          return (
            <div key={office.id} className="weather-card">
              <h3>{office.name}</h3>
              <div className="temp">
                {weather.temp}°C / {Math.round(weather.temp * 9/5 + 32)}°F
              </div>
              <div className={`commute-impact ${impact.level}`}>
                Commute: {impact.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

## Teaching Points
- Emphasize specification clarity
- Show how AI generates from good specs
- Demonstrate iterative refinement
- Highlight error handling patterns

## Common Issues & Solutions
| Issue | Solution |
|-------|----------|
| API rate limiting | Use provided mock responses |
| CORS errors | Check network connectivity to Stillriver API |
| State updates not showing | Review useEffect dependencies |