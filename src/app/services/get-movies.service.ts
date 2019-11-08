import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GetMoviesService {

  constructor(private http: HttpClient) { }


  getMovies() {
    return this.http.get(environment.api + 'movies');
  }
  addMovies(params?) {
    return this.http.post(environment.api + 'add/movies', params);
  }
  idMovies(id: any){
    return this.http.get(environment.api + 'movies?filter[where][año]='+id)
  }
//     movies[];
//   getMoviesFilter(id:number): movies[]{

//     let movie = this.getMovies();
//     let movies = movie.filter(item=>intem.nombre == id);
//     return movies
// }



// {
//   "nombre": "",
//   "titulos": "",
//   "año": 0,
//   "generos": [
//     "",
//     ""
//   ],
//   "estrellas": 0,
//   "director": "",
//   "elenco": "",
//   "image": "",
//   "descripccion": ""
// },
}