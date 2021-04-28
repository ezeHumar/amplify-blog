import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usernameURL: String = "";//The username given in the url

  constructor(private route: ActivatedRoute) {
    this.usernameURL = route.snapshot.params["username"];//recover the id passed on the url
  }
  
  username: String = "";//The username 
  email: String = "";

  async ngOnInit() {
  }

}
