import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd; /* Add border to the entire table */
`;

const StyledTh = styled.th`
  border-left: 1px solid #ddd; /* Add border to the left side of each cell */
  border-right: 1px solid #ddd; /* Add border to the right side of each cell */
  padding: 8px;
  text-align: center;
  background-color: #557c83;
`;

const StyledTd = styled.td`
  border-left: 1px solid #ddd; /* Add border to the left side of each cell */
  border-right: 1px solid #ddd; /* Add border to the right side of each cell */
  padding: 8px;
`;

const DataTableContainer = styled.div`
  overflow-x: auto;
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 300px; /* Set a maximum height for the container */
  max-width: 300px; /* Set a maximum width for the container */
  padding: 10px;
`;

const DataTable = ({ data }) => {



  return (
    <div className='datatable-container'>
    <DataTableContainer >
    <StyledTable >
      <thead>
        <tr>
          <StyledTh>ID</StyledTh>
          <StyledTh>User Name</StyledTh>
          <StyledTh>Email</StyledTh>
          <StyledTh>Sales</StyledTh>
          <StyledTh>Product</StyledTh>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <StyledTd>{item.id}</StyledTd>
            <StyledTd>{item.User_Name}</StyledTd>
            <StyledTd>{item.email}</StyledTd>
            <StyledTd>{item.sales}</StyledTd>
            <StyledTd>{item.productName}</StyledTd>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </DataTableContainer>
    </div>
  );
}

export default DataTable;
