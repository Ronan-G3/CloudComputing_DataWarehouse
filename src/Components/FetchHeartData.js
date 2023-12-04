// Testapi connection
import React, { useState, useEffect } from 'react';

const FetchHeartData = () => {
  const { loadHeartData } = useContext(HeartDataContext);
  
  useEffect(() => {
    loadHeartData();
  }, []);

  return (
    <div>
      <p>Backend Response: {backendMessage || 'Loading...'}</p>
    </div>
  );
};

export default FetchHeartData;