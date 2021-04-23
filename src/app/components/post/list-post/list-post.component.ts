import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute } from '@angular/router'
import { Post } from '../../../model/post'

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(private api: APIService) { }

  postsList: Array<Post> = [];

  ngOnInit(): void {
    this.api.ListPosts().then( data => {
      this.postsList = (data.items as Array<Post>);
      console.log(data.items);
    });
  }

}
