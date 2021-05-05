import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { AuthenticationComponent } from '../../authentication/authentication.component'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authComp: AuthenticationComponent) { }

  //sing up form
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  
  ngOnInit(): void {
  }
  
  onSubmit(){
    //The data entered on the form is passed for singing up
    Auth.signUp(this.form.value.username, this.form.value.password, this.form.value.email).then( data => {
      //The authState is changed to confirm as that is the component tath should be loaded
      this.authComp.authStateChange('confirm');
      //The user is set in the authorization component, so then it gets passed to the confirmation component
      this.authComp.setUser(this.form.value.username);
    })
    .catch( err => {
      console.log("There was an error signing in");
    })
  }

  //This cuntion triggers if the user wants to sign in
  goSignin(){
    //Change the auth state to signin
    this.authComp.authStateChange('signin');
  }

}
