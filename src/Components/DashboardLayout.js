// In your parent component where you render DashboardLayout
import React, { useState, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { fetchData } from '../Utils/api'; // Or wherever your fetchData is located

const ParentComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // Fetch chart data
      const fetchedChartData = await fetchData('/your-chart-endpoint');
      setChartData(fetchedChartData);

      // Fetch table data
      const fetchedTableData = await fetchData('/your-table-endpoint');
      setTableData(fetchedTableData);
    };

    getData();
  }, []);

  return (
    <DashboardLayout chartData={chartData} tableData={tableData} />
  );
};

export default ParentComponent;
