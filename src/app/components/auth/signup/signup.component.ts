import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  code: boolean = false; //Variable too see if the signup or confirmation component should be shown
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  
  ngOnInit(): void {
    this.code = false;
  }
  
  onSubmit(){
    Auth.signUp(this.form.value.username, this.form.value.password, this.form.value.email).then( data => {
      console.log("Signed up");
      this.code = true;
      // this.router.navigate(['']);
    })
    .catch( err => {
      console.log("There was an error signing in");
    })
  }

}
