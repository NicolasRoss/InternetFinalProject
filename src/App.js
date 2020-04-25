import React, { Component } from 'react';

import './App.css';
import { Grid, TextField, FormControlLabel, Checkbox, Container, Button} from '@material-ui/core';
import SignIn from './signIn';
import Routes from './Routes';
import history from './history';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';



class App extends Component {
  render (){
    return(
    <React.Fragment>
      <div>im really bad at this stuff</div>
      <Container maxWidth="sm">
        <h1>Sign-Up</h1>
        <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="billing address-line1"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="billing address-line2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="billing address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="billing postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="billing country"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    label="Agree to Terms & Conditions"
                  />
                </Grid>
                <Routes>
                <Link to="/signIn"><Button variant="contained" color="primary">Submit</Button></Link>
                </Routes>
              </Grid>
            </Container>
          </React.Fragment>
    )
  }
}


export function redir() {
  return <Redirect to="signIn"/>
}

export default App;
