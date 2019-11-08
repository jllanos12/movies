import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private id: GetMoviesService) { }

  ngOnInit() {
  }
  

  
  // idMovies() {
  //   this.id.idMovies(id).subscribe((id: any) => {
  //       console.log(id);
  //       this.movies = id.results;
  //     }, (err: HttpErrorResponse) => {
  //       this.loadingSpinner = false;
  //       console.log(err);
  //     })



  // }
}
