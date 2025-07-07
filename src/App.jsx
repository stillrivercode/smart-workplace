import React from 'react';
import { WeatherMonitor } from './components/WeatherMonitor';
import './styles/weather-monitor.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Smart Workplace Dashboard</h1>
      </header>
      <main>
        <WeatherMonitor />
      </main>
    </div>
  );
}

export default App;