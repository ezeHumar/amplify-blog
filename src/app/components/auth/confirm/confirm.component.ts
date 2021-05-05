import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { AuthenticationComponent } from '../../authentication/authentication.component'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  //The username of the account that has to be confirmed is received
  @Input() username: any;
  
  constructor(private authComp: AuthenticationComponent) { }

  //confirmation form
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required)
  });
  
  ngOnInit(): void {
    //The form is preloaded with the username
    this.form.setValue({
      username: this.username,
      code: ""
    });
    //The username field in the form is disabled
    this.form.controls['username'].disable();
  }

  onSubmit(){
    //The data entered on the form is passed for the account confirmation
    Auth.confirmSignUp(this.username, this.form.value.code).then( (data) => {
      //The authState is changed to singin, so that the sign in component is loaded
      this.authComp.authStateChange('signin');
    });
  }
}
