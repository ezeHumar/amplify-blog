import { Component, OnInit } from '@angular/core';
import API from '@aws-amplify/api';
import { APIService } from 'src/app/API.service';
import { Post } from '../../../model/post'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(private api: APIService) { }

  postsList: Array<Post> = [];

  ngOnInit(){

    this.api.ListPosts().then( data => {
      this.postsList = (data.items as Array<Post>);
      console.log(data.items);
    })
    .catch( err => {
      console.log("Error getting list post", err);
    });
  }

}
