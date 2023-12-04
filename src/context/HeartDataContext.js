import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../Utils/api';

export const HeartDataContext = createContext();

export const HeartDataProvider = ({ children }) => {
  const [heartData, setHeartData] = useState({ heartData1: [], heartData2: [] });

  useEffect(() => {
    const loadHeartData = async () => {
      try {
        const data1 = await fetchData('/api/heart_data_1');
        const data2 = await fetchData('/api/heart_data_2');
        setHeartData({ heartData1: data1, heartData2: data2 });
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