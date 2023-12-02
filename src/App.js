import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './Components/DashboardLayout';
import PatientInformation from './Components/PatientInformation';
import LineChart from './Components/Visualisation/LineChart';
import DataTable from './Components/DataTable';
import TestApiConnection from './Components/TestApiConnection';

import './App.css';

function App() {
    console.log('App component is rendering');
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/patients" element={<PatientInformation />} />
          <Route path="/charts" element={<LineChart />} />
          <Route path="/data-table" element={<DataTable />} />
          <Route path="/test-connection" element={<TestApiConnection />} />
          {/* ... other routes */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;