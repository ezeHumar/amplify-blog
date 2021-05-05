import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { AuthenticationComponent } from '../../authentication/authentication.component'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authComp: AuthenticationComponent) { }

  //signin form
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
  ngOnInit(): void {
  }

  onSubmit(){
    //The data entered on the form is passed for singing in
    Auth.signIn(this.form.value.username, this.form.value.password).then( data => { 
      //If the user signed in correctly it reloads the page
      window.location.reload();
    })
    .catch( err => {
      //If user confirmation is needed the confirm component is loaded
      if(err.code==="UserNotConfirmedException"){
        //authState changes to confirm-
        this.authComp.authStateChange('confirm');
        //The username is passed to the authentication component
        this.authComp.setUser(this.form.value.username);
      }
      console.log("There was an error logging in", err);
    })
  }

  //This cuntion triggers if the user wants to sign up
  goSignup(){
    //Change the auth state to signup
    this.authComp.authStateChange('signup');
  }
}
