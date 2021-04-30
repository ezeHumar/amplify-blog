import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormPostComponent } from './components/post/form-post/form-post.component';
import { DetailPostComponent } from './components/post/detail-post/detail-post.component';
import { ListPostComponent } from './components/post/list-post/list-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ConfirmComponent } from './components/auth/confirm/confirm.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth-guard.service';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';

/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FormPostComponent,
    DetailPostComponent,
    ListPostComponent,
    EditPostComponent,
    HomeComponent,
    AuthenticationComponent,
    SignupComponent,
    SigninComponent,
    ConfirmComponent,
    ProfileComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule /* Amplify module */
  ],
  providers: [ 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
