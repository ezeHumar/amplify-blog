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

  constructor(private api: APIService, private fb: FormBuilder) { }

  async ngOnInit() {

  }

  public onCreate(blog: Blog) {
  }

}
