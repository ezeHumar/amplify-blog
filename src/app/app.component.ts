import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from './API.service';
import { Blog } from '../types/blog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'amplify-blog';
  blogs: Array<Blog> = [];

  constructor(private api: APIService, private fb: FormBuilder) { }
  async ngOnInit() {
    this.api.ListBlogs().then(event => {
      this.blogs = (event as any).items;
    });
  }

  blogForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  public onCreate(blog: Blog) {
    this.api.CreateBlog(blog).then(event => {
      console.log('blog created successfully!');
      this.blogForm.reset();
    })
      .catch(err => {
        console.log('error creating blog...', err);
      });
  }

}
