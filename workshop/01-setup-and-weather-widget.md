# Phase 1: Setup & Weather Widget (30 minutes)

## Objectives
- Set up the development environment
- Learn DDD specification writing
- Create the Office Weather Monitor widget
- Integrate with API Ninjas Weather API

## Timeline
- 5 min: Project setup and API key configuration
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
GET https://api.api-ninjas.com/v1/weather?city={city}
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

### Secure API Service Setup
```javascript
// services/apiNinjas.js
import axios from 'axios';

// 🔒 SECURE: Uses backend proxy instead of exposing API key in client
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const apiNinjas = {
  // These call secure backend endpoints that proxy to API Ninjas
  getWeather: (city) => client.get(`/api/weather?city=${encodeURIComponent(city)}`),
  getTimezone: (city) => client.get(`/api/timezone?city=${encodeURIComponent(city)}`),
  getAirQuality: (city) => client.get(`/api/airquality?city=${encodeURIComponent(city)}`)
};
```

**🔒 Security Note**: The API key is now securely stored on the backend server, not exposed in the client-side code. This prevents unauthorized access and protects your API quotas.

### Weather Monitor Component
```javascript
// components/WeatherMonitor.jsx
import React, { useState, useEffect } from 'react';
import { apiNinjas } from '../services/apiNinjas';
import { offices } from '../data/offices';

export const WeatherMonitor = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const promises = offices.map(office => 
          apiNinjas.getWeather(office.city)
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
| CORS errors | Check API key configuration |
| State updates not showing | Review useEffect dependencies |