import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  { path :'blog', component: HomeComponent},
  { path :'blogdetails/:id', component: HomeComponent},
  { path :'login', component: HomeComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
