import { Component, Input, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  //This component is used for displaying images on a s3 bucket. It receives the s3 image key and a class. This class is going to be added on the img elemnt in the template

  //Image key
  @Input() key: any;
  //Class for the img element
  @Input() classSet: any;
  constructor() { }

  //url retrieved
  imgUrl: string = "";

  ngOnInit(): void {
    //The image is retrived from the s3 bucket usig the key received in the component
    Storage.get(this.key, {expires: 60}).then( data => {
      this.imgUrl=(data as string);
    })
    .catch((err) => {
    });
  }

}
