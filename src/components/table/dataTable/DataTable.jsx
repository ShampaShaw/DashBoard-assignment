import React from 'react';
import './dataTable.css'; // Added CSS file
import DataTable from 'react-data-table-component'; // Changed from 'Table' to 'DataTable'

function DataTableComponent() {
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
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
  ];


    const data = [
        { id: 1, name: 'Laptop', Sales: 50, customerName: 'John Doe', date: '12/12/2021' },
        { id: 2, name: 'Mobile', Sales: 30, customerName: 'John Doe', date: '12/12/2021' },
        { id: 3, name: 'Headphone', Sales: 20, customerName: 'John Doe', date: '12/12/2021' },
        { id: 4, name: 'Laptop', Sales: 50, customerName: 'John Doe', date: '12/12/2021' },
        { id: 5, name: 'Mobile', Sales: 30, customerName: 'John Doe', date: '12/12/2021' },
        { id: 6, name: 'Headphone', Sales: 20, customerName: 'John Doe', date: '12/12/2021' },
        { id: 7, name: 'Laptop', Sales: 50, customerName: 'John Doe', date: '12/12/2021' },
        { id: 8, name: 'Mobile', Sales: 30, customerName: 'John Doe', date: '12/12/2021' },
        { id: 9, name: 'Headphone', Sales: 20, customerName: 'John Doe', date: '12/12/2021' },
        { id: 10, name: 'Laptop', Sales: 50, customerName: 'John Doe', date: '12/12/2021' },
        { id: 11, name: 'Mobile', Sales: 30, customerName: 'John Doe', date: '12/12/2021' },
        { id: 12, name: 'Headphone', Sales: 20, customerName: 'John Doe', date: '12/12/2021' },
        { id: 13, name: 'Laptop', Sales: 50, customerName: 'John Doe', date: '12/12/2021' },
        { id: 14, name: 'Mobile', Sales: 30, customerName: 'John Doe', date: '12/12/2021' },
    ];
    
    return (
      console.log(data),
      console.log(columns),
        <div className='container'>
          <DataTable
            columns={columns}
            data={data}
            fixedHeader
            ></DataTable>
        </div>
      );
    }
    
    export default DataTableComponent;