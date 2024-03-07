import React from "react";
import Box from '@mui/material/Box';
import { SideNav } from "../component/navigation/sideNav";
import TopBarNav from "../component/navigation/topNavBar";

export const Analysis = () => {
    return (
        <React.Fragment>
            <TopBarNav/>
            <Box height={30}/>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Analysis</h1>
                </Box>
            </Box>
        </React.Fragment>
    )
}