import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { APIService } from './API.service';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  postsList: Post[] = [];
  
  constructor(private ref: ChangeDetectorRef, private api: APIService) {}
  
  async ngOnInit() {
    
      this.api.ListPosts().then( data => {
        this.postsList = (data.items as Array<Post>);
        console.log(data.items);
      })
      .catch( err => {
        console.log("Error getting list post", err);
      }); 
  }
}
