import { Component, OnInit } from '@angular/core';

import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  username: string = "";

  async ngOnInit() {
    
    await Auth.currentAuthenticatedUser()
    .then((data) => {
      this.username = data.attributes.email;
    })
  }

}
