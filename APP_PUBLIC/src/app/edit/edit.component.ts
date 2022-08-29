import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from './../services/movie.service';
import { ActivatedRoute,Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // public movie = new Movie();
  // const movieid = this.route.snapshot.paramMap.get('movieId');
  public editMovie: Movie = {
    _id: '',
    name :  '' ,
    genre: [],
    cast: [],
    director: '',
    duration: 0,
    rating: 5,
    releaseDate: '',
    description: '',
    image: ''
  };

  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var movieId = this.route.snapshot.paramMap.get('movieId');

    this.movieService.getMovieById(movieId as string)
      .then(movie => {
        this.editMovie = movie as Movie;

      });

  }

  public updateMovie(editMovie: Movie): void{

    const movieid = this.route.snapshot.paramMap.get('movieId');
    this.movieService.updateMovie(movieid as string,editMovie)
    .then(editMovie => {
      if (editMovie) {
        this.router.navigate([`/list`]);
      }
    });
  }

}
