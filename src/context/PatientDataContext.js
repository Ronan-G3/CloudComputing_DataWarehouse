import React, { createContext, useState } from 'react';

export const PatientDataContext = createContext();

export const PatientDataProvider = ({ children }) => {
  const [patientData, setPatientData] = useState([]);

  // Function to load patient data
  const loadPatientData = async () => {
    const data = await fetchData('patients');
    setPatientData(data);
  };

  return (
    <PatientDataContext.Provider value={{ patientData, loadPatientData }}>
      {children}
    </PatientDataContext.Provider>
  );
};
