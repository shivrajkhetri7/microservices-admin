import React from "react";
import Box from '@mui/material/Box';
import { SideNav } from "../component/navigation/sideNav";
import Team from "../component/about/Team";
import ContactUs from "../component/about/ContactUs";

export const About = () => {
    return (
        <React.Fragment>
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