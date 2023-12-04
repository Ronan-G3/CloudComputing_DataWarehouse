import React, { useState } from 'react';
import axios from 'axios';

const QueryBox = ({ onExecuteQuery }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = async () => {
    try {
      // Replace with the actual endpoint you set up in your backend
      const response = await axios.post('/api/execute-query', { query });
      onExecuteQuery(response.data);
    } catch (error) {
      console.error('Error executing query:', error);
      // Handle the error state here, perhaps set an error message in your state and display it
    }
  };

  return (
    <div>
      <textarea value={query} onChange={handleQueryChange} />
      <button onClick={handleQuerySubmit}>Run Query</button>
    </div>
  );
};

export default QueryBox;