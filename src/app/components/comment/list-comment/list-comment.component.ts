import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  @Input() comments: any;//This is the comments that this component has to display

  constructor() { }

  ngOnInit(): void {
    
  }

}
