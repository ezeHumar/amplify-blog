import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { Comment } from 'src/app/model/comment';
import { Profile } from 'src/app/model/profile';

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.css']
})
export class FormCommentComponent implements OnInit {
  @Input() usernameLogged: any;
  @Input() postID: any;

  profile: Profile = {};

  form = new FormGroup({
    content: new FormControl('', Validators.required)
  });
  
  constructor(private api: APIService) { }

  ngOnInit(): void {
    if(this.usernameLogged != null){
      this.api.ListProfiles({ username: { eq: this.usernameLogged } }).then( data => {
        this.profile = data.items![0]!;
      });
    }
  }

  onSubmit(){
    let newComment = new Comment(
      this.postID,
      this.form.value.content,
      this.profile.id!);

    console.log(newComment);

    this.api.CreateComment(newComment).then( data => {
      console.log("Comment created succesfully", data);
    })
    .catch(() => {
      console.log("Error creating comment");
    });
  }

}
