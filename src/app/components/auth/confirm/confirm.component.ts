import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Input() username: any;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required)
  });
  
  ngOnInit(): void {
    this.form.setValue({
      username: this.username,
      code: ""
    });
    this.form.controls['username'].disable();
  }

  onSubmit(){
    Auth.confirmSignUp(this.username, this.form.value.code).then( () => this.router.navigate(['/signin']))
  }
}
