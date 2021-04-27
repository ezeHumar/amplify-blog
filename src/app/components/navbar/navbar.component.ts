import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  username: string = "";

  async ngOnInit() {
    await Auth.currentAuthenticatedUser()
    .then((data) => {
      this.username = data.username;
    })
    .catch( err => {
      console.log("not logged");
    })
  }

  async logOut(){
    Auth.signOut().then( data => {
      this.router.navigate(['']);
    })
    .catch( err => {
      console.log("Error login out")
    });
      
    
  }

}
