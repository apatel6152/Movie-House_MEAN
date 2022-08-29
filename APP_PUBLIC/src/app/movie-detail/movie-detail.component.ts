import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {

  public movie = new Movie();
  @Input() movie_rating: Movie | undefined;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getMovieDetais();

  }

  private getMovieDetais() {
      const movieid = this.route.snapshot.paramMap.get('movieId');
      console.log(movieid);
      this.movieService.getMovieById(movieid as string)
        .then(movie => {
          this.movie = movie as unknown as Movie;

      });
  }

}
