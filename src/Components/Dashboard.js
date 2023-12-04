// src/Components/Dashboard.js
import React, { useContext } from 'react';
import { HeartDataContext } from '../context/HeartDataContext';
import ChartComponent from './ChartComponent'; // Import your chart component

const Dashboard = () => {
  const { heartData1 } = useContext(HeartDataContext);

  // Here you will need to create the data for your charts based on heartData1
  // For example, if you want to display a chart of cholesterol levels by age:
  const cholesterolData = heartData1.map(item => ({
    age: item.age, // Replace 'age' with the attribute you want to use as a label
    cholesterol: item.chol // Replace 'chol' with the attribute for cholesterol levels
  }));

  // You can then pass this data to your ChartComponent
  // Make sure your ChartComponent is set up to accept and display this data

  return (
    <>
      {/* You can create multiple ChartComponents for different analytics */}
      <ChartComponent data={cholesterolData} title="Cholesterol Levels by Age" />
      {/* Add more charts as needed */}
    </>
  );
};

export default Dashboard;
