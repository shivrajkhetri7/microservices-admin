import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { SideNav } from "../../component/navigation/sideNav";

export const Dashboard = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Dashboard</h1>
                </Box>
            </Box>
        </React.Fragment>
    )
}