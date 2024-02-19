import React from "react";
import { Container, Typography, Box, Card, Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

//Images
const team1 = "https://demos.creative-tim.com/otis-kit-pro/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg";
const team2 = "https://demos.creative-tim.com/otis-kit-pro/static/media/team-3.0ef0be95e6850814c79e.jpg";
const team3 = "https://demos.creative-tim.com/otis-kit-pro/static/media/team-4.85c82b6e60178804017f.jpg";

function Team() {
  const SocialIcons = () => {
    return <React.Fragment>
      <Tooltip placement="top" title="Follow me!">
         <Box className="fab fa-twitter">
          <XIcon />
        </Box>
      </Tooltip>
      <Tooltip placement="top" title="Follow me!">
        <Box className="fab fa-instagram">
          <InstagramIcon />
        </Box>
      </Tooltip>
      <Tooltip placement="top" title="Follow me!">
        <Box className="fab fa-linkedin"> 
        <LinkedInIcon />
      </Box>
    </Tooltip>
    </React.Fragment >
  };

return (
  <Box component="section" py={6}>
    <Container>
      <Grid container item flexDirection="column" xs={12} lg={7} mb={6}>
        <Typography variant="h3" mb={1}>
          Our Awesome Team
        </Typography>
        <Typography variant="body2" color="text">
          This is the paragraph where you can write more details about your team. Keep you user
          engaged by providing meaningful information.
        </Typography>
      </Grid>
      <Grid container spacing={3} mt={6}>
        <Grid item xs={12} md={6} lg={4}>
          <Card >
            <img src={team1} alt="Shivraj Khetri" />
            <Typography>Name : Shivaj Khetri</Typography>
            <Typography>Position : Developer</Typography>
            <Typography>Description : And I love you like Kanye loves Kanye. We need to restart the human foundation.</Typography>
            <SocialIcons />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card >
            <img src={team2} alt="Shivraj Khetri" />
            <Typography>Name : Shivaj Khetri</Typography>
            <Typography>Position : Developer</Typography>
            <Typography>Description : And I love you like Kanye loves Kanye. We need to restart the human foundation.</Typography>
            <SocialIcons />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card >
            <img src={team3} alt="Shivraj Khetri" />
            <Typography>Name : Shivaj Khetri</Typography>
            <Typography>Position : Developer</Typography>
            <Typography>Description : And I love you like Kanye loves Kanye. We need to restart the human foundation.</Typography>
            <SocialIcons />
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
}

export default Team;