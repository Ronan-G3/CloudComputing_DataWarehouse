// HeartDataTable.js
import React, { useContext } from 'react';
import { HeartDataContext } from '../context/HeartDataContext';

const HeartDataTable = ({ dataset }) => {
  const context = useContext(HeartDataContext);
  const data = dataset === "1" ? context.heartData1 : context.heartData2;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Chest Pain Type (cp)</th>
          <th>Resting Blood Pressure (trestbps)</th>
          <th>Cholesterol (chol)</th>
          <th>Fasting Blood Sugar 120 mg/dl (fbs)</th>
          <th>Resting Electrocardiographic Results (restecg)</th>
          <th>Max Heart Rate Achieved (thalach)</th>
          <th>Exercise Induced Angina (exang)</th>
          <th>ST depression (oldpeak)</th>
          <th>Slope</th>
          <th>Number of Major Vessels (ca)</th>
          <th>Thalassemia (thal)</th>
          <th>Target</th>
          </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.patient_id}</td>
            <td>{row.age}</td>
            <td>{row.sex}</td>
            <td>{row.cp}</td>
            <td>{row.trestbps}</td>
            <td>{row.chol}</td>
            <td>{row.fbs}</td>
            <td>{row.restecg}</td>
            <td>{row.thalach}</td>
            <td>{row.exang}</td>
            <td>{row.oldpeak}</td>
            <td>{row.slope}</td>
            <td>{row.ca}</td>
            <td>{row.thal}</td>
            <td>{row.target}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HeartDataTable;