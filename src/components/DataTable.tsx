
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';

interface DataTableProps {
    columns: GridColDef[]
    rows: GridValidRowModel[]
}

export default function DataTable({columns, rows}: DataTableProps) {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 5, pageSize: 5 },
          },
        }}
        pageSizeOptions={[10,25,50,100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}