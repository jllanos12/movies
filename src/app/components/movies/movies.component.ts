import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private servMovie: GetMoviesService) { }
  searchMovies = '';
  ngOnInit() {
    this.getMovies();
  }
  loadingSpinner: boolean = false;
  movies = [];
  dataMovies = [];

  getMovies() {
    this.loadingSpinner = true;
    this.servMovie.getMovies()
      .subscribe((data: any) => {
        console.log(data);
        this.movies = data.results;
        this.dataMovies = data.results;
        this.loadingSpinner = false;
      }, (err: HttpErrorResponse) => {
        this.loadingSpinner = false;
        console.log(err);
      })



  }


}
