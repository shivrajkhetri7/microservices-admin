import React from "react";
import Box from '@mui/material/Box';
import { SideNav } from "../component/navigation/sideNav";
import TopBarNav from "../component/navigation/topNavBar";
import Team from "../component/about/Team";
import ContactUs from "../component/about/ContactUs";

export const About = () => {
    return (
        <React.Fragment>
            <TopBarNav/>
            <Box height={30}/>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <ContactUs/>
                    <Team />
                </Box>
            </Box>
        </React.Fragment>
    )
}