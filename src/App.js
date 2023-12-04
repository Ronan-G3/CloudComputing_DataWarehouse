import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { HeartDataProvider } from './context/HeartDataContext';
import HeartDataTable from './Components/HeartDataTable';
import DashboardLayout from './Components/DashboardLayout';

import './App.css';

const App = () => {
  return (
    <Router>
      <HeartDataProvider>
        <DashboardLayout>
          <Routes>
            <Route path="/data-table" element={<HeartDataTable />} />
            {/* Redirect from home page to data table */}
            <Route path="/" element={<Navigate replace to="/data-table" />} />
          </Routes>
        </DashboardLayout>
      </HeartDataProvider>
    </Router>
  );
};

export default App;