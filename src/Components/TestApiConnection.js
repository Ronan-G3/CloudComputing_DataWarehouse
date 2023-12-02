// Testapi connection
import React, { useState, useEffect } from 'react';

const TestApiConnection = () => {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend test endpoint
    console.log('Attempting to fetch:', `${process.env.REACT_APP_API_BASE_URL}/api/test`);
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/test`)
      .then(response => response.json())
      .then(data => {
        setBackendMessage(data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setBackendMessage('Failed to connect to the backend');
      });
  }, []);

  return (
    <div>
      <p>Backend Response: {backendMessage || 'Loading...'}</p>
    </div>
  );
};

export default TestApiConnection;