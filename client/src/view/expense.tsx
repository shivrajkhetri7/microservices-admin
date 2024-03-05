import React from "react";
import Box from '@mui/material/Box';
import { SideNav } from "../component/navigation/sideNav";
import AddExpesne from "../component/expense/addExpesne";

export const Expense = () => {
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <AddExpesne/>
                </Box>
            </Box>
        </React.Fragment>
    )
}