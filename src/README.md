# Office Weather Monitor Widget

A React component that displays real-time weather data for multiple office locations with commute impact indicators.

## Features

- 🌡️ **Temperature Display**: Shows temperature in both Celsius and Fahrenheit
- 🌦️ **Weather Icons**: Dynamic icons based on current conditions
- 🚗 **Commute Impact**: Intelligent assessment of weather impact on commuting
- 🔄 **Auto-refresh**: Updates every 30 minutes automatically
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⚠️ **Error Handling**: Graceful handling of API failures
- 🎨 **Modern UI**: Clean, card-based design with hover effects

## Quick Start

### 1. Install Dependencies

```bash
npm install axios
```

### 2. Set Up API Key

1. Get a free API key from [API Ninjas](https://api.api-ninjas.com/)
2. Copy `.env.example` to `.env`
3. Add your API key:

```bash
REACT_APP_API_NINJAS_KEY=your_api_key_here
```

### 3. Use the Component

```jsx
import React from 'react';
import { WeatherMonitor } from './components/WeatherMonitor';
import './styles/weather-monitor.css';

function App() {
  return (
    <div className="App">
      <WeatherMonitor />
    </div>
  );
}
```

## Configuration

### Office Locations

Edit `src/data/offices.js` to configure your office locations:

```javascript
export const offices = [
  {
    id: 'nyc',
    name: 'New York Office',
    city: 'New York',
    timezone: 'America/New_York'
  },
  // Add more offices...
];
```

### Refresh Interval

Customize the auto-refresh interval:

```jsx
<WeatherMonitor refreshInterval={15 * 60 * 1000} /> // 15 minutes
```

## Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `refreshInterval` | number | 1800000 | Auto-refresh interval in milliseconds (30 min) |

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `REACT_APP_API_NINJAS_KEY` | Yes | API Ninjas Weather API key |
| `REACT_APP_WEATHER_REFRESH_INTERVAL` | No | Custom refresh interval |

## File Structure

```
src/
├── components/
│   └── WeatherMonitor.jsx    # Main component
├── services/
│   └── apiNinjas.js         # API service layer
├── data/
│   └── offices.js           # Office configuration
├── styles/
│   └── weather-monitor.css  # Component styles
└── App.jsx                  # Demo app
```

## Features Explained

### Commute Impact Algorithm

The component calculates commute difficulty based on:

- **Temperature extremes**: < 0°C or > 35°C = Difficult
- **Rain conditions**: Any rain-related conditions = Wet
- **Normal conditions**: Everything else = Normal

### Error Handling

- **Network failures**: Shows cached data with error message
- **API rate limits**: Displays last successful data
- **Invalid API key**: Shows configuration error
- **City not found**: Shows "Data unavailable" for specific office

### Responsive Design

- **Desktop**: 3-column grid layout
- **Tablet**: 2-column layout  
- **Mobile**: Single column with optimized spacing

## Workshop Integration

This component is part of the Smart Workplace Workshop and demonstrates:

- ✅ Domain-Driven Design specification
- ✅ API integration patterns
- ✅ React hooks and state management
- ✅ Error handling strategies
- ✅ Responsive design principles
- ✅ Modern CSS techniques

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| "API key not found" | Check `.env` file and restart dev server |
| CORS errors | Ensure API key is correctly configured |
| No data showing | Check browser console for network errors |
| Component not rendering | Verify CSS file is imported |

### Development

To test with mock data during development, you can temporarily modify the API service to return sample data.

## Next Steps

1. **Add more cities**: Extend the offices configuration
2. **Weather alerts**: Implement threshold-based notifications  
3. **Historical data**: Add weather trend charts
4. **Air quality**: Integrate air quality measurements
5. **Forecast**: Add 5-day weather forecast