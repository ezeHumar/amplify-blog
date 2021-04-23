import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute } from '@angular/router'
import { Post } from '../../../model/post'

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  id: string = "";

  constructor(private api: APIService, private router: ActivatedRoute) { 
    this.id = router.snapshot.params["id"];
  }

  post = new Post("","");

  ngOnInit(): void {
    this.api.GetPost(this.id).then( data => {
      console.log(data);
      this.post = data;
    });
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
