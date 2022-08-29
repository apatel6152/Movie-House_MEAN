// import { MovieServiceService } from './services/movie.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';

import { MovieService } from './services/movie.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieListComponent,
    AboutComponent,
    FrameworkComponent,
    HomepageComponent,
    MovieDetailComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MovieService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [FrameworkComponent]
})

export class AppModule { }
