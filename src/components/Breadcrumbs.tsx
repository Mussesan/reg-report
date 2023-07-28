import { Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

export default function Breadcrumbs(){

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                MUI
            </Link>

            <Link 
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/instalation/"
            >
                Core
            </Link>
        </Breadcrumbs>
    )
}