import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deleteMovie();
  }

  public deleteMovie() {
    const movieid = this.route.snapshot.paramMap.get('movieId');
    this.movieService.deleteMovie(movieid as string)
      .then(() => this.router.navigate([`/list`])
    );
  }
}
