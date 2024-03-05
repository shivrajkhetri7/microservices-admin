import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Avatar, IconButton, Typography, Box } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

interface CardsInterface {
    name: string
    profile: string
    profession: string
    linkedInUrl: string
    gitUrl?: string
    instagramUrl: string
    twitterUrl: string
}

const Cards = (props: CardsInterface) => {
    const navigate = useNavigate();

    const CARD_PROPERTY = {
        borderRadius: 3,
        boxShadow: 0
    };

    return (
        <React.Fragment>
            <Card sx={CARD_PROPERTY}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        p: 2
                    }}
                >
                    <Avatar
                        sx={{ width: 70, height: 70, mb: 2 }}
                        src={props.profile ? props.profile : "https://randomuser.me/api/portraits/women/6.jpg"}
                    >
                        S
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {props.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {props.profession}
                    </Typography>
                </Box>
                <Typography sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "center"
                }}> And I love you like Kanye loves Kanye. We need to restart the human foundation.</Typography>
                <CardContent
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                >
                    <IconButton size="large" onClick={() => navigate(props.linkedInUrl)}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton size="large" onClick={() => navigate(props.instagramUrl)}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton size="large" onClick={() => navigate(props.twitterUrl)}>
                        <XIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default Cards