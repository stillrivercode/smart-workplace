# Mock Data Setup

## Overview
This document provides the mock data structure and setup files needed for the workshop. These files simulate a real distributed company with offices in three locations.

## File Structure
```
src/
├── data/
│   ├── offices.js
│   └── team.js
└── services/
    └── stillriverApi.js
```

## Office Locations Data

### File: `src/data/offices.js`
```javascript
export const offices = [
  {
    id: "sf",
    name: "San Francisco HQ",
    city: "San Francisco",
    country: "US",
    timezone: "America/Los_Angeles",
    employees: 45,
    capacity: 60,
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: "lon",
    name: "London Office",
    city: "London", 
    country: "GB",
    timezone: "Europe/London",
    employees: 30,
    capacity: 40,
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    }
  },
  {
    id: "tok",
    name: "Tokyo Office",
    city: "Tokyo",
    country: "JP",
    timezone: "Asia/Tokyo",
    employees: 25,
    capacity: 35,
    coordinates: {
      lat: 35.6762,
      lng: 139.6503
    }
  }
];
```

## Team Members Data

### File: `src/data/team.js`
```javascript
export const team = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Engineering Manager",
    office: "sf",
    city: "San Francisco",
    email: "sarah.chen@company.com",
    workHours: {
      start: 9,
      end: 17,
      timezone: "America/Los_Angeles"
    }
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Product Manager",
    office: "lon",
    city: "London",
    email: "james.wilson@company.com",
    workHours: {
      start: 9,
      end: 17,
      timezone: "Europe/London"
    }
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    role: "Senior Developer",
    office: "tok",
    city: "Tokyo",
    email: "yuki.tanaka@company.com",
    workHours: {
      start: 9,
      end: 17,
      timezone: "Asia/Tokyo"
    }
  },
  {
    id: 4,
    name: "Maria Garcia",
    role: "UX Designer",
    office: "sf",
    city: "San Francisco",
    email: "maria.garcia@company.com",
    workHours: {
      start: 10,
      end: 18,
      timezone: "America/Los_Angeles"
    }
  },
  {
    id: 5,
    name: "Tom Brown",
    role: "DevOps Lead",
    office: "lon",
    city: "London",
    email: "tom.brown@company.com",
    workHours: {
      start: 8,
      end: 16,
      timezone: "Europe/London"
    }
  },
  {
    id: 6,
    name: "Akiko Sato",
    role: "QA Engineer",
    office: "tok",
    city: "Tokyo",
    email: "akiko.sato@company.com",
    workHours: {
      start: 9,
      end: 17,
      timezone: "Asia/Tokyo"
    }
  },
  {
    id: 7,
    name: "Carlos Rodriguez",
    role: "Backend Developer",
    office: "sf",
    city: "San Francisco",
    email: "carlos.rodriguez@company.com",
    workHours: {
      start: 9,
      end: 17,
      timezone: "America/Los_Angeles"
    }
  },
  {
    id: 8,
    name: "Emma Thompson",
    role: "Frontend Developer",
    office: "lon",
    city: "London",
    email: "emma.thompson@company.com",
    workHours: {
      start: 9,
      end: 17,
      timezone: "Europe/London"
    }
  }
];
```

## API Service Configuration

### File: `src/services/stillriverApi.js`
```javascript
import axios from 'axios';

const BASE_URL = 'https://api.stillriver.info/v1';

// Create axios instance with common configuration
const client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000 // 10 second timeout
});

// Add request interceptor for logging
client.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
client.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export const stillriverApi = {
  // Weather endpoint
  getWeather: (city) => {
    return client.get(`/weather?city=${encodeURIComponent(city)}`);
  },

  // Timezone endpoint
  getTimezone: (city) => {
    return client.get(`/timezone?city=${encodeURIComponent(city)}`);
  },

  // Air quality endpoint
  getAirQuality: (city) => {
    return client.get(`/airquality?city=${encodeURIComponent(city)}`);
  }
};

// Mock data for development/testing
export const mockData = {
  weather: {
    "San Francisco": {
      temp: 18,
      feels_like: 20,
      humidity: 65,
      wind_speed: 12,
      cloud_pct: 40
    },
    "London": {
      temp: 12,
      feels_like: 10,
      humidity: 80,
      wind_speed: 8,
      cloud_pct: 75
    },
    "Tokyo": {
      temp: 22,
      feels_like: 25,
      humidity: 60,
      wind_speed: 6,
      cloud_pct: 20
    }
  },
  timezone: {
    "San Francisco": {
      timezone: "America/Los_Angeles",
      datetime: "2025-01-15T10:30:00-08:00",
      offset: -8
    },
    "London": {
      timezone: "Europe/London",
      datetime: "2025-01-15T18:30:00+00:00",
      offset: 0
    },
    "Tokyo": {
      timezone: "Asia/Tokyo",
      datetime: "2025-01-16T03:30:00+09:00",
      offset: 9
    }
  },
  airQuality: {
    "San Francisco": {
      overall_aqi: 45,
      PM10: 20,
      PM2_5: 15,
      NO2: 25,
      SO2: 8
    },
    "London": {
      overall_aqi: 65,
      PM10: 35,
      PM2_5: 28,
      NO2: 40,
      SO2: 12
    },
    "Tokyo": {
      overall_aqi: 55,
      PM10: 30,
      PM2_5: 22,
      NO2: 35,
      SO2: 10
    }
  }
};

// Utility function to use mock data when API fails
export const getWeatherWithFallback = async (city) => {
  try {
    const response = await stillriverApi.getWeather(city);
    return response.data;
  } catch (error) {
    console.warn(`Weather API failed for ${city}, using mock data`);
    return mockData.weather[city] || mockData.weather["San Francisco"];
  }
};

export const getTimezoneWithFallback = async (city) => {
  try {
    const response = await stillriverApi.getTimezone(city);
    return response.data;
  } catch (error) {
    console.warn(`Timezone API failed for ${city}, using mock data`);
    return mockData.timezone[city] || mockData.timezone["San Francisco"];
  }
};

export const getAirQualityWithFallback = async (city) => {
  try {
    const response = await stillriverApi.getAirQuality(city);
    return response.data;
  } catch (error) {
    console.warn(`Air Quality API failed for ${city}, using mock data`);
    return mockData.airQuality[city] || mockData.airQuality["San Francisco"];
  }
};
```

## Environment Configuration

### File: `.env.example`
```bash
# Stillriver API Configuration
REACT_APP_STILLRIVER_API_URL=https://api.stillriver.info/v1

# Development settings
REACT_APP_ENV=development
REACT_APP_API_TIMEOUT=10000

# Mock data settings (for development)
REACT_APP_USE_MOCK_DATA=false
```

### File: `.env`
```bash
# Copy from .env.example - no API key needed for workshop
REACT_APP_STILLRIVER_API_URL=https://api.stillriver.info/v1
REACT_APP_ENV=development
REACT_APP_API_TIMEOUT=10000
REACT_APP_USE_MOCK_DATA=false
```

## Quick Setup Commands

### Initial Project Setup
```bash
# Install dependencies
npm install axios

# Create directory structure
mkdir -p src/data src/services

# Create environment file
cp .env.example .env

# .env file is ready to use - no API key needed
```

### Verify Setup
```bash
# Test API connection
npm start

# Check browser console for API logs
# Should see successful API requests to Stillriver API
```

## Usage in Components

### Example: Using the data in a component
```javascript
import React, { useState, useEffect } from 'react';
import { offices } from '../data/offices';
import { team } from '../data/team';
import { stillriverApi, getWeatherWithFallback } from '../services/stillriverApi';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use real API with fallback to mock data
        const weatherData = await getWeatherWithFallback('San Francisco');
        setData(weatherData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Offices: {offices.length}</h2>
      <h2>Team Members: {team.length}</h2>
      <h2>Weather Data: {data ? 'Loaded' : 'Loading...'}</h2>
    </div>
  );
};
```

## Troubleshooting

### Common Issues
1. **API Connection Issues**: Verify internet connectivity to Stillriver API
2. **CORS errors**: Stillriver API should not have CORS issues for workshop use
3. **Rate limiting**: Workshop usage should stay within reasonable limits
4. **Network timeouts**: Increase timeout in stillriverApi.js if needed

### Debug Mode
Set `REACT_APP_USE_MOCK_DATA=true` in `.env` to use only mock data during development.

This setup provides a solid foundation for the workshop with realistic data that participants can use to build their dashboard widgets.