import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
  ngOnInit(): void {
  }

  onSubmit(){
    Auth.signIn(this.form.value.username, this.form.value.password).then( data => {
      if(data.con)
      console.log("Signed in");
      
      this.router.navigate(['']).then( () => {
        window.location.reload();
      });
    })
    .catch( err => {
      if(err.code==="UserNotConfirmedException"){
        this.router.navigate(['signup/confirm/']);
      }
      console.log("There was an error logging in", err);
    })
  }
}
