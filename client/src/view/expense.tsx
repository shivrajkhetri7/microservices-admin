import React from "react";
import Box from '@mui/material/Box';
import { SideNav } from "../component/navigation/sideNav";

export const Expense = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Expense</h1>
                </Box>
            </Box>
        </React.Fragment>
    )
}