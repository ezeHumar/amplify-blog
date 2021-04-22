import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/API.service';
import { Post } from "../../../model/post"

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  constructor(private api: APIService) { }

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  onSubmit(){
    let post = new Post(
      this.form.value.title,
      this.form.value.content
    );

    this.api.CreatePost(post).then( event => {
      console.log("Post created");
    })
    .catch( err => {
      console.log("Error creating post", err)
    });
  }

  ngOnInit(): void {
  }

}
