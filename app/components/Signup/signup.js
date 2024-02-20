"use client"
import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        FarmFiesta
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {

  async function handleSubmit(event) {
    // event.preventDefault();
    // const userData = new FormData(event.currentTarget);

    // toast.promise(new Promise(resolve => setTimeout(resolve, 2000)), {
    //   pending: "Loading"
    // });

    // const { data, error } = await supabase.auth.signUp({
    //   email: userData.get('email'),
    //   password: userData.get('password'),
    //   options: {
    //     data: {
    //       firstName: userData.get('firstName'),
    //       lastName: userData.get('lastName')
    //     },
    //     emailRedirectTo: `${location.origin}/api/auth/callback`
    //   }
    // });

    // console.log(error, data);

    // toast.dismiss();

    // if (error) {
    //   toast.error("Server error: Try again after some time", {
    //     autoClose: false
    //   })
    // }
    // else {
    //   if (!data.user) {
    //     toast.error("User already exists", {
    //       autoClose: false
    //     });
    //   }
    //   else {
    //     toast.info("Check your email", {
    //       autoClose: false
    //     });
    //   }
    // }
  };

  return (
    <Container component="main" maxWidth="xs" className="border-t">
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="bg-blue-500"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}