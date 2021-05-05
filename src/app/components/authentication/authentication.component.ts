import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  title = 'amplify-angular-auth';
  //The actual auth state. This component receives the authState that should have at the start (singup or singin)
  @Input() authState: any;

  constructor() { }

  //This variable saves the username if its necesary, specialy when is has to be passed to the confirm component
  user: string = "";
  
  ngOnInit() {
  }

  //For uptdating the actual authState and load the correct component
  authStateChange(newAuthState: string){
    this.authState = newAuthState;
  }

  //For modifying the username
  setUser(user: string){
    this.user = user;
  }
}
