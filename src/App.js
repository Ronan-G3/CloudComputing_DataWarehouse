import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import PatientInformation from './components/PatientInformation';
import LineChart from './components/Visualization/LineChart';
import DataTable from './components/DataTable';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Switch>
          <Route path="/patients" component={PatientInformation} />
          <Route path="/charts" component={LineChart} />
          <Route path="/data-table" component={DataTable} />
          {/* ... other routes */}
        </Switch>
      </DashboardLayout>
    </Router>
  );
}

export default App;