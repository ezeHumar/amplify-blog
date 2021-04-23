import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailPostComponent } from './components/post/detail-post/detail-post.component';
import { FormPostComponent } from './components/post/form-post/form-post.component'
import { ListPostComponent } from './components/post/list-post/list-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'post', component: ListPostComponent },
  { path:'post/detail/:id', component: DetailPostComponent },
  { path:'post/new', component: FormPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
