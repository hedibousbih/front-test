import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  { path :'blog', component: BlogComponent},
  { path :'blogdetails/:id', component: BlogdetailsComponent},
  { path :'login', component: LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
