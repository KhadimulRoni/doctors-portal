import {
   Button,
   Container,
   Grid,
   TextField,
   Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
   const [loginData, setLoginData] = useState({});
   const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
   };
   const handleLoginSubmit = e => {
      alert('Hello');
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
                  <NavLink
                     style={{ textDecoration: 'none' }}
                     to="/register"
                  >
                     <Button variant="text">
                        New User? Please Register
                     </Button>
                  </NavLink>
                  <Button
                     sx={{ width: '75%', m: 1 }}
                     type="submit"
                     variant="contained"
                  >
                     Login
                  </Button>
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
