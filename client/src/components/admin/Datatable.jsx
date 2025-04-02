import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: '_id', headerName: 'ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'author', headerName: 'Author', width: 150 },
  { field: 'genre', headerName: 'Genre', width: 150 },
  { field: 'image', headerName: 'Cover', width: 100,
    renderCell: (params) => (
      <img 
        src={params.value} 
        alt="Book Cover" 
        style={{ width: 50, height: 50, borderRadius: 5 }} 
      />
    ) 
   },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 450,
  },
];


const paginationModel = { page: 0, pageSize: 5 };

function Datatable({data}) {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}


export default Datatable