// HeartDataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const HeartDataContext = createContext();

export const HeartDataProvider = ({ children }) => {
  const [heartData, setHeartData] = useState({ heartData1: [] });

  useEffect(() => {
    const loadHeartData = async () => {
      try {
        const response = await axios.get('/api/heart_data_1');
        setHeartData({ heartData1: response.data });
      } catch (error) {
        console.error("Failed to load heart data", error);
      }
    };

    loadHeartData();
  }, []);

  return (
    <HeartDataContext.Provider value={heartData}>
      {children}
    </HeartDataContext.Provider>
  );
};
