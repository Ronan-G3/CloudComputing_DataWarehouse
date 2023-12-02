import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          {/* Table headers */}
          <th>ID</th>
          <th>Name</th>
          {/* More headers */}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {/* Table row data */}
            <td>{row.id}</td>
            <td>{row.name}</td>
            {/* More data cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
