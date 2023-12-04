// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HeartDataProvider } from './context/HeartDataContext';
import Dashboard from './Components/Dashboard';
import HeartDataTable from './Components/HeartDataTable';
import './App.css'; // Ensure your main styles are imported

const App = () => {
  return (
    <HeartDataProvider>
      <Router>
        <div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dataset1">Dataset 1</Link>
            <Link to="/dataset2">Dataset 2</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dataset1" element={<HeartDataTable dataset="1" />} />
            <Route path="/dataset2" element={<HeartDataTable dataset="2" />} />
          </Routes>
        </div>
      </Router>
    </HeartDataProvider>
  );
};

export default App;
