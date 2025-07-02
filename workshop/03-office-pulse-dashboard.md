# Phase 3: Office Pulse Dashboard (40 minutes)

## Objectives
- Create specifications for composite widgets
- Orchestrate multiple APIs
- Implement performance optimization
- Handle complex data transformations

## Timeline
- 10 min: Specification for composite widget
- 20 min: Implementation with multiple APIs
- 10 min: Polish and error handling

## Office Pulse Specification

### Purpose
Provide a quick snapshot of office utilization and environmental comfort to help make workplace decisions.

### Requirements
- Show office utilization percentage
- Display comfort score based on weather
- List any weather alerts
- Simple traffic light visualization

### API Endpoints
- Weather: `/weather?city={city}`
- Air Quality: `/airquality?city={city}`

### Calculations
- Utilization: (employees in office / total capacity) × 100
- Comfort Score: Based on temp (20-25°C = 100%, decreases outside range)
- Alerts: If temp < 10°C or > 30°C, or if air quality > 100

### Acceptance Criteria
- [ ] Shows all offices in grid
- [ ] Color coding for status
- [ ] Refreshes every 30 minutes
- [ ] Shows last update time

## Implementation Code

### Office Pulse Component
```javascript
// components/OfficePulse.jsx
import React, { useState, useEffect } from 'react';
import { apiNinjas } from '../services/apiNinjas';
import { offices } from '../data/offices';

export const OfficePulse = () => {
  const [pulseData, setPulseData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPulseData = async () => {
      setLoading(true);
      try {
        const promises = offices.map(async (office) => {
          const [weather, airQuality] = await Promise.all([
            apiNinjas.getWeather(office.city),
            apiNinjas.getAirQuality(office.city).catch(() => ({ data: {} }))
          ]);
          
          return {
            [office.id]: {
              weather: weather.data,
              airQuality: airQuality.data,
              utilization: Math.floor(Math.random() * 40 + 50) // Mock data
            }
          };
        });
        
        const results = await Promise.all(promises);
        const combined = Object.assign({}, ...results);
        setPulseData(combined);
      } catch (error) {
        console.error('Pulse data fetch failed:', error);
      }
      setLoading(false);
    };

    fetchPulseData();
  }, []);

  const getComfortScore = (temp) => {
    if (temp >= 20 && temp <= 25) return 100;
    if (temp >= 18 && temp <= 27) return 80;
    if (temp >= 15 && temp <= 30) return 60;
    return 40;
  };

  const getStatus = (utilization, comfort) => {
    const overall = (utilization + comfort) / 2;
    if (overall >= 80) return { color: 'green', text: 'Excellent' };
    if (overall >= 60) return { color: 'yellow', text: 'Good' };
    return { color: 'red', text: 'Needs Attention' };
  };

  if (loading) return <div className="loading">Loading office pulse...</div>;

  return (
    <div className="office-pulse">
      <h2>Office Pulse</h2>
      <div className="pulse-grid">
        {offices.map(office => {
          const data = pulseData[office.id] || {};
          const comfort = getComfortScore(data.weather?.temp || 20);
          const status = getStatus(data.utilization, comfort);
          
          return (
            <div key={office.id} className={`pulse-card ${status.color}`}>
              <h3>{office.name}</h3>
              <div className="metrics">
                <div>Utilization: {data.utilization}%</div>
                <div>Comfort: {comfort}%</div>
                <div>AQI: {data.airQuality?.overall_aqi || 'N/A'}</div>
              </div>
              <div className="status">{status.text}</div>
            </div>
          );
        })}
      </div>
      <div className="last-updated">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};
```

## Advanced Features

### Real-time Utilization Data
For production use, you might integrate with:
- Badge scan systems
- Calendar APIs for meeting room bookings
- WiFi connection counts
- Desk booking systems

```javascript
// Enhanced utilization calculation
const calculateUtilization = (office) => {
  const baseUtilization = office.employees * 0.7; // 70% baseline
  const weatherImpact = getWeatherImpact(office.weather);
  const timeOfDayImpact = getTimeOfDayImpact();
  
  return Math.min(100, Math.max(0, 
    baseUtilization + weatherImpact + timeOfDayImpact
  ));
};

const getWeatherImpact = (weather) => {
  if (!weather) return 0;
  
  // Bad weather increases office utilization
  if (weather.temp < 5 || weather.temp > 35) return 15;
  if (weather.cloud_pct > 80) return 10;
  if (weather.wind_speed > 20) return 5;
  
  // Good weather decreases office utilization
  if (weather.temp >= 20 && weather.temp <= 25 && weather.cloud_pct < 30) {
    return -10;
  }
  
  return 0;
};

const getTimeOfDayImpact = () => {
  const hour = new Date().getHours();
  
  // Peak hours
  if (hour >= 10 && hour <= 16) return 0;
  
  // Early/late hours
  if (hour < 8 || hour > 18) return -20;
  
  // Shoulder hours  
  return -10;
};
```

### Alert System
```javascript
const generateAlerts = (offices, pulseData) => {
  const alerts = [];
  
  offices.forEach(office => {
    const data = pulseData[office.id];
    if (!data) return;
    
    // Temperature alerts
    if (data.weather?.temp < 10) {
      alerts.push({
        office: office.name,
        type: 'temperature',
        severity: 'high',
        message: `Very cold conditions (${data.weather.temp}°C)`
      });
    }
    
    if (data.weather?.temp > 30) {
      alerts.push({
        office: office.name,
        type: 'temperature',
        severity: 'high',
        message: `Very hot conditions (${data.weather.temp}°C)`
      });
    }
    
    // Air quality alerts
    if (data.airQuality?.overall_aqi > 100) {
      alerts.push({
        office: office.name,
        type: 'air_quality',
        severity: 'medium',
        message: `Poor air quality (AQI: ${data.airQuality.overall_aqi})`
      });
    }
    
    // Utilization alerts
    if (data.utilization > 90) {
      alerts.push({
        office: office.name,
        type: 'capacity',
        severity: 'medium',
        message: `Office at ${data.utilization}% capacity`
      });
    }
  });
  
  return alerts;
};
```

## Teaching Points
- Multiple API orchestration
- Error handling strategies
- Performance considerations
- Data transformation patterns

## Mock Data Structure

### Office Locations
```javascript
// data/offices.js
export const offices = [
  {
    id: "sf",
    name: "San Francisco HQ",
    city: "San Francisco",
    country: "US",
    timezone: "America/Los_Angeles",
    employees: 45,
    capacity: 60
  },
  {
    id: "lon",
    name: "London Office",
    city: "London", 
    country: "GB",
    timezone: "Europe/London",
    employees: 30,
    capacity: 40
  },
  {
    id: "tok",
    name: "Tokyo Office",
    city: "Tokyo",
    country: "JP",
    timezone: "Asia/Tokyo",
    employees: 25,
    capacity: 35
  }
];
```

## Performance Optimizations

### Data Caching
```javascript
// Simple cache implementation
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
};
```

### Batch API Requests
```javascript
// Batch multiple office requests
const fetchAllOfficeData = async () => {
  const batchRequests = offices.map(office => ({
    office,
    requests: [
      apiNinjas.getWeather(office.city),
      apiNinjas.getAirQuality(office.city)
    ]
  }));
  
  const results = await Promise.allSettled(
    batchRequests.map(async ({ office, requests }) => {
      const [weather, airQuality] = await Promise.allSettled(requests);
      return {
        office,
        weather: weather.status === 'fulfilled' ? weather.value.data : null,
        airQuality: airQuality.status === 'fulfilled' ? airQuality.value.data : null
      };
    })
  );
  
  return results
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value);
};
```