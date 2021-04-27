import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Auth } from 'aws-amplify';
import { Post } from '../../../model/post'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  id: string = ""; //id of the post
  isOwner: boolean = false; //to check if the user authenticated is owner of the post

  constructor(private api: APIService, private route: ActivatedRoute, private router: Router) { 
    this.id = route.snapshot.params["id"];//recover the id passed on the url
  }

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });
  
  post = new Post("","");

  ngOnInit(): void {
    //Get the post with the id
    this.api.GetPost(this.id).then( data => {
      
      this.post = data;
      //Set the form values with the post data
      this.form.setValue({
        title: this.post.title,
        content: this.post.content
      });

      //Now check if the post owner is the same as the user logged 
      Auth.currentUserInfo().then( data => {
        if(data.username === this.post.owner){
          this.isOwner = true;
        }else{
          //If the user is not the owner os the post it gets redirected to the post detail
          this.router.navigate(['post/detail/', this.id]);
        }
      });
    });
  }

  onSubmit(){
    this.post.title= this.form.value.title;
    this.post.content= this.form.value.content;

    //Only send the necessary attributes
    this.api.UpdatePost({
      "id": this.post.id!, //The exclamation sign in post.id is to tell typescript that the attribute won't be null
      "title": this.post.title, 
      "content": this.post.content})
      .then( event => {
        console.log("Post updated");
        this.router.navigate(['post/detail/', this.id]);
    })
    .catch( err => {
      console.log("Error updating post");
    });
  }

}
