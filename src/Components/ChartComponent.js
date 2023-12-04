// ChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartComponent = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
      {/* More bars if needed */}
    </BarChart>
  );
};

export default ChartComponent;
