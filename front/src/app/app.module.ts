import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DivHomeComponent } from './div-home/div-home.component';
import { SporthomeComponent } from './sporthome/sporthome.component';
import { StadehomeComponent } from './stadehome/stadehome.component';
import { AbonnementhomeComponent } from './abonnementhome/abonnementhome.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { NavbarconnectedComponent } from './navbarconnected/navbarconnected.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListBlogBackComponent } from './Blog/list-blog-back/list-blog-back.component';
import { UpdateBlogBackComponent } from './Blog/update-blog-back/update-blog-back.component';
import { AddCommentaireComponent } from './Commentaire/add-commentaire/add-commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DivHomeComponent,
    SporthomeComponent,
    StadehomeComponent,
    AbonnementhomeComponent,
    BlogComponent,
    BlogdetailsComponent,
    NavbarconnectedComponent,
    LoginComponent,
    CommentsComponent,
    HomeComponent,
    AddBlogComponent,
    BlogDetailsComponent,
    ListBlogComponent,
    ListBlogBackComponent,
    UpdateBlogBackComponent,
    AddCommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
