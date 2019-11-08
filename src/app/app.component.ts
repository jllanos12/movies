import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from './http-movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

  // getAllMovies() {
  //   this.isLoadingMovies = true;
  //   this.servMovies.getMovies()
  //     .subscribe((data: any) => {
  //       console.log(data);
  //       this.movies = data.results;
  //     })
  // }

}
