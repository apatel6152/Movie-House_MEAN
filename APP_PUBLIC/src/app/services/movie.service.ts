import { Injectable } from '@angular/core';
import { Movie} from '../models/movie';
import {HttpClient, HttpResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class MovieService {

   private moviesUrl = 'http://localhost:3000/api/movies';
   constructor(private http:HttpClient){}

   getMovies() : Promise<void | Movie[]>{

     return this.http.get(this.moviesUrl)
      .toPromise()
      .then(response => response as Movie[])
      .catch(this.handleError);
    }

    getMovieById(movieId: string) {
      return this.http.get(`${this.moviesUrl}/${movieId}`)
      .toPromise()
      .then(response => response as Movie)
      .catch(this.handleError);
    }


    createMovie(newMovie: Movie): Promise<void | Movie> {
      return this.http.post(this.moviesUrl, newMovie)
        .toPromise()
        .then(response => response as Movie)
        .catch(this.handleError);
    }

    updateMovie(movieId: string,editMovie: Movie): Promise<void | Movie> {
      return this.http.put(`${this.moviesUrl}/${movieId}`, editMovie)
        .toPromise()
        .then(response => response as Movie)
        .catch(this.handleError);
    }

    deleteMovie(movieId: string) {
      return this.http.delete(`${this.moviesUrl}/${movieId}`)
      .toPromise()
      .then(response => response as Movie)
      .catch(this.handleError);
    }

    private handleError(error: any){
      console.log(error);
  }
}
