import { DeleteComponent } from './delete/delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'list', component: MovieListComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'movie/:movieId', component: MovieDetailComponent
  },
  {
    path: 'new', component: CreateComponent
  },
  {
    path: 'edit/:movieId', component: EditComponent
  },
  {
    path: 'delete/:movieId', component: DeleteComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
