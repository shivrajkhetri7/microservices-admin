import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from "@mui/material";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../common/Copyright";

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const body = {
        email: data.get('email'),
        password: data.get('password'),
      }

      //TODO callign the auth | sign up api
      await axios.post('https://microservices-admin.onrender.com/api/auth/signin',
        body,
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response): any => {
        if (response?.status === 200) {
          navigate('/')
        }
      }).catch((err) => {
        console.error(err);
        alert(err?.message)
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={ {
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        } }
      >
        <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={ <Checkbox value="remember" color="primary" /> }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={ { mt: 3, mb: 2 } }
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/resetpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                { "Don't have an account? Sign Up" }
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={ { mt: 8, mb: 4 } } />
    </Container>
  );
}