import { Component, Input, OnInit } from '@angular/core';
import API from '@aws-amplify/api';
import { APIService } from 'src/app/API.service';
import { Post } from '../../../model/post'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  //usernameFilter gets an username an uses it as a filter to only get thar user's posts. Is't used for the user profile
  @Input() usernameFilter: any;

  constructor(private api: APIService) { }

  postsList: Array<Post> = [];

  ngOnInit() {
    if (this.usernameFilter) {
      this.api.ListPosts({ owner: { eq: this.usernameFilter } }).then(data => {
        this.postsList = (data.items as Array<Post>);
        console.log(data.items);
      })
        .catch(err => {
          console.log("Error getting list post", err);
        });
    }else{
      this.api.ListPosts().then(data => {
        this.postsList = (data.items as Array<Post>);
        console.log(data.items);
      })
        .catch(err => {
          console.log("Error getting list post", err);
        });
    }
  }

}
