import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private el: ElementRef) { }

  username: string = "";

  authState: String = "";

  async ngOnInit() {

    await Auth.currentAuthenticatedUser()
      .then((data) => {
        this.username = data.username;
      })
      .catch(err => {
        console.log("not logged");
      });
  }

  async logOut() {
    Auth.signOut().then(data => {
      this.router.navigate(['']);
    })
      .catch(err => {
        console.log("Error login out")
      });
  }


  showSignup() {
    let modal_t = document.getElementById('modal_signup')!;
    modal_t.classList.remove('hhidden');
    modal_t.classList.add('sshow');
  }

  showSignin() {
    let modal_t = document.getElementById('modal_signin')!;
    modal_t.classList.remove('hhidden');
    modal_t.classList.add('sshow');
  }

  close() {
    let modal_t = document.getElementById('modal_signin')!;
    modal_t.classList.remove('sshow');
    modal_t.classList.add('hhidden');
    modal_t = document.getElementById('modal_signup')!;
    modal_t.classList.remove('sshow');
    modal_t.classList.add('hhidden');
  }
}
