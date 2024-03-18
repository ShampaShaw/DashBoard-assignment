import React from 'react'
import './dataTable.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 100 },
  {
    field: 'Email',
    headerName: 'Email',
    type: 'string',
    width: 130,
  },
  {
    field: 'Sales',
    headerName: 'Sales',
    type: 'number',
    width: 130,
  },
  {
    field: 'Product',
    headerName: 'Product',
    type: 'string',
    width: 130,
  }
];

const rows = [
  { id: 1, Name: '1', Email: "shampa@123",Sales: 4000,Product: "Laptop" },
  { id: 2, Name: '2', Email: "shampa@123",Sales: 3000,Product: "Mobile" },
  { id: 3, Name: '5', Email: "shampa@123",Sales: 2000,Product: "Tablet"},
  { id: 4, Name: '8', Email: "shampa@123",Sales: 2780,Product: "Desktop"},
  { id: 5, Name: '10', Email: "shampa@123",Sales: 1890,Product: "Watch"},
  { id: 6, Name: '12', Email: "shampa@123",Sales: 2390,Product: "Camera"},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}