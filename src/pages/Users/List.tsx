import { IconButton, Stack } from '@mui/material';
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from "../../components/DataTable";

export default function List(){

    
const onCall = (params: GridRenderCellParams)=> {
    // Chamada via WhatsApp
}

const onEdit = (params: GridRenderCellParams)=> {
    // Edição de Usuário
}

const onDelete = (params: GridRenderCellParams)=> {
    // Exclusão de Usuário
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'Nome',
        valueGetter: (params: GridValueGetterParams)=> `${params.row.fullName.split(' ')?.shift() || ""}`,        
    },
    {
        field: "lastName",
        headerName: "Sobrenome",
        valueGetter: (params: GridValueGetterParams)=> `${params.row.fullName.split(" ")?.pop() || ""}`,
    },
    {
        field: "document",
        headerName: "CPF",
        width: 150,
    },
    {
        field: "age",
        headerName: "Idade",
        type: "number",
        valueGetter: (params: GridValueGetterParams)=> params.row.birthDate && `${
            new Date().getFullYear() - new Date(params.row.birthDate).getFullYear()
        }`        
    },
    {   field: "email", headerName: "E-mail", minWidth: 200},
    {   field: "mobile", headerName: "Celular", minWidth: 180},
    {
        field: "actions",
        headerName: "Ações",
        renderCell: (params)=> (
            <Stack direction="row" spacing={2}>
                <IconButton color="success" size="small" onClick={()=> onCall(params)}>
                    <WhatsAppIcon fontSize="inherit" />
                </IconButton>

                <IconButton color="info" size="small" onClick={ ()=> onEdit(params)}>
                    <EditIcon fontSize="inherit" />
                </IconButton>

                <IconButton color="error" size="small" onClick={ ()=> onDelete(params)}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>
        )
    }
]

const users = [{
    id: "1",
    fullName: "Gustavo Musse",
    document: "105.915.933-90",
    birthDate: new Date(1992,1,1),
    email: "gmusse.dev@gmail.com",
    emailVerified: true,
    mobile: "(34) 99678-1980",
    zipCode: "00000-000",
    addressName: "Rua Teste",
    number: "963",
    complement: "",
    neighborhood: "Bairro Teste",
    city: "Minas Gerais",
    state: "MG",
}]

    return <DataTable columns={columns} rows={users} />
    
}