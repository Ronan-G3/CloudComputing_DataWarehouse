// src/Components/AnalyticsComponent.js
import React from 'react';

const AnalyticsComponent = ({ data }) => {
  // Logic to calculate analytics goes here
  // For instance, calculating average cholesterol level
  const averageCholesterol = data.reduce((acc, curr) => acc + curr.chol, 0) / data.length;

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <p>Average Cholesterol: {averageCholesterol.toFixed(2)}</p>
      {/* Add more analytics as needed */}
    </div>
  );
};

export default AnalyticsComponent;
