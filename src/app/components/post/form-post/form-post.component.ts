import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { APIService } from 'src/app/API.service';
import { Post } from "../../../model/post"

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  constructor(private api: APIService, private router: Router) { }

  ProfileID: String = "";

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  onSubmit() {
    //Username of the current logged in user
    Auth.currentAuthenticatedUser().then(data => {
      let authUsername = data.username;
      console.log(authUsername);
      this.api.ListProfiles({ username: { eq: authUsername } }).then( data => {
        console.log(data);
        let profileID: string = (data as any).items[0].id;
        
        let post = new Post(
          this.form.value.title,
          this.form.value.content,
          profileID
        );

        this.api.CreatePost(post).then(data => {
          console.log("Post created", data);
          let postID = data.id;
          this.router.navigate(['post/detail/', postID]);
        })
          .catch(err => {
            console.log("Error creating post", err)
          });

      }).catch((err) => {
        console.log("Error getting profile id");
        console.log(err);
      });
    }).catch(() => {
      console.log("Error getting username");
    });

    
  }

  ngOnInit(): void {
  }

  //Gets the username of the current authenticated user
  getAuthUsername(): string {
    let authUsername: string = "";
    Auth.currentAuthenticatedUser().then(data => {
      authUsername = data.username;
      console.log(authUsername);
    }).catch(() => {
      console.log("Error getting username");
    });
    return authUsername;
  }

  //Gets the profile id of the current authenticated user
  getProfileID(): string {
    //First the username of the current authenticated user is recovered
    let authUsername: string = this.getAuthUsername();
    let profileID: string = "";
    console.log(authUsername);
    //Then the username recovered is used to get the profile needed
    this.api.ListProfiles({ username: { eq: authUsername } }).then( data => {
      profileID = (data as any).data.listProfiles.items[0].id;
      console.log(data);
    }).catch((err) => {
      console.log("Error getting profile id");
      console.log(err);
    });
    return profileID;
  }

}
