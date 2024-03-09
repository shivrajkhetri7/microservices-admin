import * as React from "react";
import axios from "axios";
import { Avatar, Button, CssBaseline, TextField, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../common/Copyright";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [newPassword, setNewPassword] = React.useState<boolean>(true)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries())
      console.log(data.email)
      if (data.email == '') {
        return toast.success('the email field is required')
      } else if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email as string)) {
        const body = {
          email: data.email
        }
        console.log(body, 'bidyyyyy')
        const response = await axios.post('https://microservices-admin.onrender.com/api/user/forgot-password', body, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (response.status == 404) {
          // console.log('sorrryyyy')
          // setNewPassword(false)
        }
      } else {
        console.log('errrorrrrrr')
        return toast.error('the enteried email is invalid')
      }

    } catch (error) {
      // console.log('shivrjauuu')
      setNewPassword(false)
      console.error(error)
      toast.error('sorry we could not found email id')
    }

  };

  const handleChangePassword = async (event: React.FormEvent<HTMLFormElement>) =>{
    try {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData.entries())
      const body = {
        usedId: 123,
        otp: data.otp,
        newPassword: data.newpassword
      }
      const response = await axios.post('https://microservices-admin.onrender.com/api/user/verify-otp',body,{
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(response.status == 200){
        toast.success('password reset success')
      }
    } catch (error) {
      console.error(error)
    }
   
    // console.log('newpasssss',body)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={newPassword ? handleSubmit : handleChangePassword } noValidate sx={{ mt: 1 }}>
          {newPassword ?
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
            :
            <div>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="New password"
                name="newpassword"
                autoComplete="newpassword"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="confirmpassword"
                autoComplete="confirmpassword"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="otp"
                label="OTP"
                name="OTP"
                autoComplete="otp"
                autoFocus
              />
            </div>

          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {newPassword ? 'Submit': 'Save New Password'}
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
