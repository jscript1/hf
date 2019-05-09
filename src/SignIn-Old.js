import React from 'react';
import firebase from './firebase'
import history from "./history";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

export class SignIn extends React.Component{
  
constructor(props){
    super(props);   
};


signin = (event) => {
  
  event.preventDefault();
  let data = new FormData(event.target);  
  let email = data.get('email')
  let password = data.get('password')
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(firebaseUser) {
       history.replace("/dashboard")
   })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.message)
  });  
};

signup = () => {
  history.replace("/signup")  
};


  render(){

    return(
     <div className="signin">
       <p>This is SignIn Component</p>
       <form onSubmit={this.signin}>
          
        <TextField
         InputLabelProps={{
            style: { color: '#fff' },
          }}          id="email"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
         />
         <TextField 
         InputLabelProps={{
            style: { color: '#fff' },
          }}
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <p/>
          <Fab className = "button" type="submit" variant="extended" color="primary">Sign In</Fab>        
          <Fab className = "button" type = "button" variant="extended" color="primary" onClick={this.signup.bind(this)}>Sign Up</Fab>
        </form>
                 
     </div>
    );
    }      
 }
