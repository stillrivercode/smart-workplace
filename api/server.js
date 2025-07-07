const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Ninjas configuration
const API_NINJAS_KEY = process.env.API_NINJAS_KEY;
const API_NINJAS_BASE_URL = 'https://api.api-ninjas.com/v1';

if (!API_NINJAS_KEY) {
  console.error('ERROR: API_NINJAS_KEY environment variable is required');
  process.exit(1);
}

const apiNinjasClient = axios.create({
  baseURL: API_NINJAS_BASE_URL,
  headers: {
    'X-Api-Key': API_NINJAS_KEY
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Weather endpoint proxy
app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const response = await apiNinjasClient.get(`/weather?city=${encodeURIComponent(city)}`);
    res.json(response.data);
  } catch (error) {
    console.error('Weather API error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch weather data',
      message: error.response?.data || error.message 
    });
  }
});

// Timezone endpoint proxy
app.get('/api/timezone', async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const response = await apiNinjasClient.get(`/timezone?city=${encodeURIComponent(city)}`);
    res.json(response.data);
  } catch (error) {
    console.error('Timezone API error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch timezone data',
      message: error.response?.data || error.message 
    });
  }
});

// Air quality endpoint proxy
app.get('/api/airquality', async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }

    const response = await apiNinjasClient.get(`/airquality?city=${encodeURIComponent(city)}`);
    res.json(response.data);
  } catch (error) {
    console.error('Air quality API error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch air quality data',
      message: error.response?.data || error.message 
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});