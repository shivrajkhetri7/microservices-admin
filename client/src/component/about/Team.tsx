import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import Cards from "./Card";

//Images
const team1 = "https://demos.creative-tim.com/otis-kit-pro/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg";
const team2 = "https://demos.creative-tim.com/otis-kit-pro/static/media/team-3.0ef0be95e6850814c79e.jpg";
const team3 = "https://demos.creative-tim.com/otis-kit-pro/static/media/team-4.85c82b6e60178804017f.jpg";

function Team() {
  return (
    <Box component="section" py={6} sx={{
      "width": "100%",
      "height": "40rem",
      "max-height": " 40rem",
      "opacity": 1,
      "background": "rgb(248, 249, 250)",
      "color": "rgb(52, 71, 103)",
      "border-radius": "0.75rem",
      "box-shadow": "none",
      "overflow-x": "scroll"
    }}>
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
            <Cards
              name="shivraj"
              profile={team1}
              profession="Developer"
              linkedInUrl={team1}
              gitUrl={team1}
              instagramUrl={team1}
              twitterUrl={team1}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Cards
              name="shivraj"
              profile={team2}
              profession="Developer"
              linkedInUrl={team2}
              gitUrl={team2}
              instagramUrl={team2}
              twitterUrl={team2}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Cards
              name="shivraj"
              profile={team3}
              profession="Developer"
              linkedInUrl={team3}
              gitUrl={team3}
              instagramUrl={team3}
              twitterUrl={team3}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Cards
              name="shivraj"
              profile={team3}
              profession="Developer"
              linkedInUrl={team3}
              gitUrl={team3}
              instagramUrl={team3}
              twitterUrl={team3}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Cards
              name="shivraj"
              profile={team3}
              profession="Developer"
              linkedInUrl={team3}
              gitUrl={team3}
              instagramUrl={team3}
              twitterUrl={team3}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Cards
              name="shivraj"
              profile={team3}
              profession="Developer"
              linkedInUrl={team3}
              gitUrl={team3}
              instagramUrl={team3}
              twitterUrl={team3}
            />
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}

export default Team;