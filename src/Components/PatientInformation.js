import React from 'react';

const PatientInformation = ({ patientData }) => {
  return (
    <div>
      <h2>Patient Information</h2>
      {/* Render patient information here */}
      <p>Name: {patientData.name}</p>
      <p>Age: {patientData.age}</p>
      {/* More patient data fields */}
    </div>
  );
};

export default PatientInformation;
