import { Pipe, PipeTransform } from '@angular/core';
import { MoviesComponent } from '../components/movies/movies.component';

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoPost = [];
    for(const movies of value){
      if(MoviesComponent.name.indexOf(arg)>-1){
        resultadoPost.push(movies);
        console.log(arg);
      }
    }
    return resultadoPost;
  }

}
