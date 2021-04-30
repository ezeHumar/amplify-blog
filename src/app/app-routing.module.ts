import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { DetailPostComponent } from './components/post/detail-post/detail-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { FormPostComponent } from './components/post/form-post/form-post.component'
import { ListPostComponent } from './components/post/list-post/list-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WrongRouteComponent } from './components/wrong-route/wrong-route.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'post', component: ListPostComponent },
  { path:'post/detail/:id', component: DetailPostComponent },
  { path:'post/new', component: FormPostComponent, canActivate: [AuthGuard] },
  { path:'post/update/:id', component: EditPostComponent, canActivate: [AuthGuard] },
  { path:'signin', component: SigninComponent },
  { path:'signup', component: SignupComponent },
  { path:'signup/confirm', component: SignupComponent },
  { path:'profile/:username', component: ProfileComponent },
  { path:'auth', component: AuthenticationComponent },
  { path:'404', component: WrongRouteComponent},
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
