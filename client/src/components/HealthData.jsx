
import React from 'react';
import './HealthData.css';

export const HealthData = () => {
  // Dummy data for health entries
  const healthEntries = Array.from({ length: 50 }, (_, index) => ({
    data_id: index + 1,
    time: new Date().toLocaleString(),
    BP: getRandomValue(90, 120) + '/' + getRandomValue(60, 80),
    heartRate: getRandomValue(60, 100),
    temperature: getRandomValue(97, 99).toFixed(1),
    pulse: getRandomValue(50, 100),
    oxygenLevel: getRandomValue(95, 100),
  }));

  // Function to generate random values within a range
  function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="health-data-container">
      <h2>Health Data</h2>
      <div className="health-data-table">
        <table>
          <thead>
            <tr>
              <th>Data ID</th>
              <th>Time</th>
              <th>Blood Pressure</th>
              <th>Heart Rate</th>
              <th>Temperature (°C)</th>
              <th>Pulse</th>
              <th>Oxygen Level (%)</th>
            </tr>
          </thead>
          <tbody>
            {healthEntries.map((entry) => (
              <tr key={entry.data_id}>
                <td>{entry.data_id}</td>
                <td>{entry.time}</td>
                <td>{entry.BP}</td>
                <td>{entry.heartRate}</td>
                <td>{entry.temperature}</td>
                <td>{entry.pulse}</td>
                <td>{entry.oxygenLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
