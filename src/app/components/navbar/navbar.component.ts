import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Auth } from 'aws-amplify';
import { AuthenticationComponent } from '../authentication/authentication.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

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
  
  openSignup() {
    const modalRef = this.modalService.open(AuthenticationComponent);
    modalRef.componentInstance.authState = 'signup';
  }

  openSignin() {
    const modalRef = this.modalService.open(AuthenticationComponent);
    modalRef.componentInstance.authState = 'signin';
  }

}
