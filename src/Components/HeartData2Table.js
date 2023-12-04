// HeartData2Table.js
import React, { useContext } from 'react';
import { HeartDataContext } from '../context/HeartDataContext';

const HeartData2Table = () => {
  const { heartData2 } = useContext(HeartDataContext);

  if (!heartData2 || heartData2.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Weight</th>
          <th>AP High</th>
          <th>AP Low</th>
          <th>Cholesterol</th>
          <th>Glucose</th>
          <th>Smoker</th>
          <th>Alcohol Intake</th>
          <th>Active</th>
          <th>Cardio Disease</th>
        </tr>
      </thead>
      <tbody>
        {heartData2.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.age}</td>
            <td>{row.gender}</td>
            <td>{row.height}</td>
            <td>{row.weight}</td>
            <td>{row.ap_hi}</td>
            <td>{row.ap_lo}</td>
            <td>{row.cholesterol}</td>
            <td>{row.gluc}</td>
            <td>{row.smoke}</td>
            <td>{row.alco}</td>
            <td>{row.active}</td>
            <td>{row.cardio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HeartData2Table;
