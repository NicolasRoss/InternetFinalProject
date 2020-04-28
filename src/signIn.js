import React, { Component } from 'react';

import './App.css';
import { Grid, TextField, FormControlLabel, Checkbox, Container, Button} from '@material-ui/core';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    apiResponse: '',
}

handleEmailChange = (e) => this.setState({
    email: e.target.value
})

handlePassChange = (e) => this.setState({
    password: e.target.value
})

constructor(props){
    super(props);
    this.validateSignup = this.validateSignup.bind(this);
    // this.callAPI = this.callAPI.bind(this);
}
async validateSignup(){
    console.log("validating login..")
    console.log(this.state.email)
    if(this.state.email === ''){
        console.log("error on email")
    }else if(this.state.password === ''){
        //print out issue
        console.log("error on pass")
        // return <div>something went wrong...</div>
    }
    else{
        //query for the user in db
        console.log('verifying user..')
        await this.callAPI();
        console.log("apiResponse:")
        console.log(this.state.apiResponse)
        if(this.state.apiResponse !== ''){
            console.log()
            this.props.history.push({
                pathname: '/Appointments',
                state: {
                    id: this.state.apiResponse
                }
            })
        }
        
    }

}
async callAPI(){
    await fetch("http://localhost:9000/setUser?user="+this.state.email+"&pass="+this.state.password, {
    method: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response[0].id)
        if(response !== []){
            this.setState({apiResponse: response[0].id});
        }
    })
    .catch(function(error){
        console.log(error);
    })
    
    
  }

  
  render (){
    return(
    <React.Fragment>
      
      <p className="test-p">{this.state.apiResponse}</p>
      <Container maxWidth="sm">
        <h1>Sign-Up</h1>
        <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField 
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    required id="userName"
                    name="userName"
                    label="Username"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth
                    value={this.state.password}
                    onChange={this.handlePassChange}
                    required id="password"
                    name="password"
                    label="Password"
                    />
                </Grid>
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
                {/* <Link to='/signIn'> */}
                <Button variant="contained" color="primary" onClick={this.validateSignup}>Submit</Button>
                {/* </Link> */}
              </Grid>
            </Container>
          </React.Fragment>
          
    )
  }
}



export default SignIn;

