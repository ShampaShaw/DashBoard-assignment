import React from 'react';
import './dataTable.css';
import Table from 'react-data-table-component';

function DataTable({ data }) {
  const columns = [
    {
      name: 'Sl No.',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Product Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Sales',
      selector: row => row.Sales,
      sortable: true,
    },
    {
      name: 'Customer Name',
      selector: row => row.customerName,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
  ];

  // Sample initial data
  const initialData = [
    { id: 1, name: 'Laptop', Sales: 50, customerName: 'John Doe', email: 'john@example.com', date: '12/12/2021' },
    { id: 2, name: 'Mobile', Sales: 30, customerName: 'Jane Doe', email: 'jane@example.com', date: '12/12/2021' },
    { id: 3, name: 'Headphone', Sales: 20, customerName: 'James Smith', email: 'james@example.com', date: '12/12/2021' },
    // Add more initial data as needed
  ];

  return (
    <div className='data-table' style={{ width: '100%', height: '100%' }}>
      <Table columns={columns} data={data || initialData} fixedHeader style={{ width: '100%', height: '100%' }} /> {/* Use initial data if no data is provided */}
    </div>
  );
}

export default DataTable;
