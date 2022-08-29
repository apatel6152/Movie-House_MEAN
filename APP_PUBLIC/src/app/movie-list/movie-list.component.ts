import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  public movies: Movie[] = [];
  public message = '';


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {

    this.movieService
      .getMovies()
      .then(movies => {
        // debugger
        this.movies = movies as Movie[]
      });
  }

}
