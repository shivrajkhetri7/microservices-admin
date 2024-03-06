import React from 'react';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const  PageNotFound = () => {
    const navigate = useNavigate();
    const handlebackToHome=()=>{
        navigate('/');
    }
  return (
    <Container sx={{ "display":"flex", "textAlign":"center", "alignItems":"center", "flexDirection":"column"}} >
        <img src='https://siliconvalleygazette.com/wp-content/uploads/2021/12/what-is-the-404-not-found-error.png' alt='Page Not Found' /> 
        <Button variant="contained" onClick={handlebackToHome} sx={{mt:2}}>Back to Home</Button>
    </Container>
  )
}
