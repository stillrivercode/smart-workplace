// Secure API service using backend proxy
// This keeps the API key secure on the server side
import axios from 'axios';

// Use backend proxy instead of direct API calls
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for debugging
client.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('🚨 Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
client.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('🚨 API Error:', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const apiNinjas = {
  // Weather endpoint - calls /api/weather on backend
  getWeather: (city) => client.get(`/api/weather?city=${encodeURIComponent(city)}`),
  
  // Timezone endpoint - calls /api/timezone on backend
  getTimezone: (city) => client.get(`/api/timezone?city=${encodeURIComponent(city)}`),
  
  // Air quality endpoint - calls /api/airquality on backend
  getAirQuality: (city) => client.get(`/api/airquality?city=${encodeURIComponent(city)}`),
  
  // Health check endpoint
  healthCheck: () => client.get('/health')
};

export default apiNinjas;