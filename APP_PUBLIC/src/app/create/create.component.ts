import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MovieService } from './../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [MovieService]
})
export class CreateComponent implements OnInit {

  public newMovie: Movie = {
    _id: '',
    name: '',
    genre: [],
    cast: [],
    director: '',
    duration: 0,
    rating: 5,
    releaseDate: '',
    description: '',
    image: ''
  };

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  public createNewMovie(newMovie: Movie): void{
    this.movieService.createMovie(newMovie)
    .then(movie => {
      if (movie) {
        this.router.navigate([`/list`]);
      }
    });
  }
}
