import { Box, Container, TextField, Typography, Grid, Button } from '@mui/material'
import React from 'react'

const ContactUs = () => {
    return (
        <Box component="section" py={ 6 } sx={ {
            "width": "100%",
            "opacity": 1,
            "background": "rgb(248, 249, 250)",
            "color": "rgb(52, 71, 103)",
            "border-radius": "0.75rem",
            "box-shadow": "none"
        } }>
            <Container sx={ { textAlign: "center" } }>
                <Box>
                    <Typography variant="h3" mb={ 1 }>
                        Contact Us
                    </Typography>
                    <Typography sx={ { mt: 2 } }>
                        For further questions, including partnership
                        opportunities, please email hello@creative-tim.com or
                        contact using our contact form.
                    </Typography>
                    <Grid container spacing={ 2 } sx={ { mt: 2 } }>
                        <Grid item xs={ 6 }>
                            <TextField
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                                className='contactus-input'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={ 6 }>
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                className='contactus-input'
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Box sx={ { displayFlex: "column", height: 200, mt: 2 } }>
                        <TextField
                            sx={ { mt: 2 } }
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                        />
                        <Button variant="contained" sx={ { mt: 2 } }>Send Message</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactUs;
