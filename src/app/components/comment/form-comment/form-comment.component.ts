import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { Comment } from 'src/app/model/comment';
import { Profile } from 'src/app/model/profile';
import { DetailPostComponent } from '../../post/detail-post/detail-post.component'

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.css']
})
export class FormCommentComponent implements OnInit {
  @Input() usernameLogged: any;//Receives the username of the user logged in, recovered in the detail post component
  @Input() postID: any;//Receives the post id, recovered in the detail post component

  //Profile of the user logged in
  profile: Profile = {};

  //the nec comment form
  form = new FormGroup({
    content: new FormControl('', Validators.required)
  });
  
  constructor(private api: APIService, private detailPost: DetailPostComponent) { }

  ngOnInit(): void {
    //First the logged in user profile is queried
    if(this.usernameLogged != null){
      this.api.ListProfiles({ username: { eq: this.usernameLogged } }).then( data => {
        this.profile = data.items![0]!;
      });
    }
  }

  //This function triggers when the user submits the comment
  onSubmit(){
    //The comment is created with the form content, the post id and the user logeedin's id

    //A 'dummy' comment is created to then show imediatly to the user the new comment submited
    let newCommentDummy = new Comment(
      this.postID,
      this.form.value.content,
      this.profile.id!,
      this.profile
      )

    //A 'real' comment is created to sent to the API
    //The 'dummy' comment isn't sent to the api beceause a comment with a profile isn't accepted
    let newComment = new Comment(
      this.postID,
      this.form.value.content,
      this.profile.id!
      );

    //The new comment is passed to the api
    this.api.CreateComment(newComment).then( data => {
      console.log("Comment created succesfully");
      //The 'dummy' comment is sent to the list of comments on the post detail component
      this.detailPost.addCommentCreated(newCommentDummy);
      //The comment form is reset
      this.form.reset();
    })
    .catch((err) => {
      console.log("Error creating comment");
    });
  }

}
