import React from "react";
import Box from '@mui/material/Box';
import { SideNav } from "../component/navigation/sideNav";
import Calendar from "../component/events/eventCalender";
import TopBarNav from "../component/navigation/topNavBar";

export const Events = () => {
    return (
        <React.Fragment>
            <TopBarNav/>
            <Box height={30}/>
            <Box sx={{ display: 'flex',p:3 }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <Calendar/>
                </Box>
            </Box>
        </React.Fragment>
    )
}