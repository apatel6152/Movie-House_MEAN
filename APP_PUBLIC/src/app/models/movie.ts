import { Component, OnInit } from "@angular/core";

export class Movie {
  _id: string = '';
  name: string = '';
  genre: string[] = [];
  cast: string[] = [];
  director: string= '';
  duration: number = 0;
  rating: number= 0;
  releaseDate: string = '' ;
  description: string= '';
  image: string= ''
}

