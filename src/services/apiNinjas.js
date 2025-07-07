import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_NINJAS_KEY;
const BASE_URL = 'https://api.api-ninjas.com/v1';

// Create axios client with default configuration
const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY
  },
  timeout: 10000 // 10 second timeout
});

export const apiNinjas = {
  // Get weather data for a specific city
  getWeather: (city) => client.get(`/weather?city=${encodeURIComponent(city)}`),
  
  // Get timezone data for a specific city
  getTimezone: (city) => client.get(`/timezone?city=${encodeURIComponent(city)}`),
  
  // Get air quality data for a specific city
  getAirQuality: (city) => client.get(`/airquality?city=${encodeURIComponent(city)}`)
};

// Error handling utility
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    console.error('API Error:', error.response.data);
    return `API Error: ${error.response.status} - ${error.response.data.error || 'Unknown error'}`;
  } else if (error.request) {
    // Request made but no response received
    console.error('Network Error:', error.request);
    return 'Network Error: Unable to reach weather service';
  } else {
    // Something else happened
    console.error('Error:', error.message);
    return `Error: ${error.message}`;
  }
};