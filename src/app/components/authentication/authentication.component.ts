import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, FormFieldTypes } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  @Input() authState: any;
  
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;

  formFieldsSignUp: FormFieldTypes = [];
  formFieldsSignIn: FormFieldTypes = [];
  formFieldsForgotPass: FormFieldTypes = [];

  constructor(private ref: ChangeDetectorRef) {
    this.formFieldsSignUp = [
      {
        type: "email",
        label: "Email",
        placeholder: "",
        required: true,
      },
      {
        type: "username",
        label: "Username",
        placeholder: "",
        required: true,
      },
      {
        type: "password",
        label: "Password",
        placeholder: "",
        required: true,
      }
    ]

    this.formFieldsSignIn = [
      {
        type: "username",
        label: "Username",
        placeholder: "",
        required: true,
      },
      {
        type: "password",
        label: "Password",
        placeholder: "",
        required: true,
      }
    ]

    this.formFieldsForgotPass = [
      {
        type: "username",
        label: "Username",
        placeholder: "",
        required: true,
      }
    ]

    
  }

  ngOnInit() {
    
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
