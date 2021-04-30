import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() authState: any;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  } 
  
  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
  }

}
