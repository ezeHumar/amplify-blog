import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute } from '@angular/router'
import { Auth } from 'aws-amplify';
import { Post } from '../../../model/post'

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  id: string = ""; //id of the post
  isOwner: boolean = false; //to check if the user authenticated is owner of the post

  constructor(private api: APIService, private route: ActivatedRoute) { 
    this.id = route.snapshot.params["id"];//recover the id passed on the url
  }

  post = new Post("","");

  ngOnInit(): void {
    //Get the post with the id
    this.api.GetPost(this.id).then( data => {
      console.log(data);
      this.post = data;

      //Now check if the post owner is the same as the user logged 
      Auth.currentUserInfo().then( data => {
        if(data.username === this.post.owner){
          this.isOwner = true;
        }
      })
      .catch();
    })
    .catch();
  }

  onDelete(){
    //The DeletePost function is called passing only the id. If the entire post is passed it gives an error because the attributes do not match
    this.api.DeletePost({"id": this.post.id }).then( data => {
      console.log("Post deleted");
    })
    .catch( err => {
      console.log("Error deleting post");
    });
  }

}
