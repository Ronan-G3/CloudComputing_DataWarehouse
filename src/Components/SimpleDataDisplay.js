// src/components/SimpleDataDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SimpleDataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://52.209.24.34:3000/api/heart_data_1');
        setData(response.data.slice(0, 5)); // Get only first 5 records for simplicity
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Sample</h2>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Sex</th>
            {/* ... add other headers */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.age}</td>
              <td>{item.sex}</td>
              {/* ... add other data cells */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleDataDisplay;
