import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPostComponent } from './components/post/form-post/form-post.component'

const routes: Routes = [
  { path:'createPost', component: FormPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
