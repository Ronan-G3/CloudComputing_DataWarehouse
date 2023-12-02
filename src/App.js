import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './Components/DashboardLayout';
import PatientInformation from './Components/PatientInformation';
import LineChart from './Components/Visualization/LineChart';
import DataTable from './Components/DataTable';
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