import {
   Alert,
   Button,
   CircularProgress,
   Container,
   Grid,
   TextField,
   Typography,
} from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
   const [loginData, setLoginData] = useState({});
   const { user, loginUser, isLoading, authError } = useAuth();

   const location = useLocation();
   const history = useHistory();

   const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
   };
   const handleLoginSubmit = e => {
      loginUser(
         loginData?.email,
         loginData?.password,
         location,
         history
      );
      e.preventDefault();
   };
   return (
      <Container>
         <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
               <Typography variant="body1" gutterBottom>
                  Login
               </Typography>
               <form onSubmit={handleLoginSubmit}>
                  <TextField
                     sx={{ width: '75%', m: 1 }}
                     id="standard-basic"
                     name="email"
                     onChange={handleOnChange}
                     label="Tour Email"
                     variant="standard"
                  />
                  <TextField
                     sx={{ width: '75%', m: 1 }}
                     id="standard-basic"
                     name="password"
                     onChange={handleOnChange}
                     label="Your Password"
                     type="password"
                     variant="standard"
                  />

                  <Button
                     sx={{ width: '75%', m: 1 }}
                     type="submit"
                     variant="contained"
                  >
                     Login
                  </Button>
                  <NavLink
                     style={{ textDecoration: 'none' }}
                     to="/register"
                  >
                     <Button variant="text">
                        New User? Please Register
                     </Button>
                  </NavLink>
                  {isLoading && <CircularProgress />}
                  {user?.email && (
                     <Alert severity="success">
                        Login Successful!
                     </Alert>
                  )}
                  {authError && (
                     <Alert severity="error">{authError}!</Alert>
                  )}
               </form>
            </Grid>
            {/* Login image */}
            <Grid item xs={12} md={6}>
               <img
                  style={{
                     width: '100%',
                  }}
                  src={login}
                  alt=""
               />
            </Grid>
         </Grid>
      </Container>
   );
};

export default Login;
