// Content.js
import React from 'react';
import ChartComponent from './ChartComponent'; // Make sure you import your ChartComponent

const Content = ({ chartData }) => {
  // Conditional rendering
  if (!chartData) {
    // Render some loading text or spinner
    return <div>Loading...</div>;
  }

  // If chartData is available, render your ChartComponent
  return (
    <div>
      <ChartComponent data={chartData} />
      {/* ... other components that use chartData */}
    </div>
  );
};

export default Content;
