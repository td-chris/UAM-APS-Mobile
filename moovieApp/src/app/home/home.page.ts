import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [
    MovieService
  ]
})
export class HomePage {

  public lista_filmes = new Array<any>();

  constructor(private movieService: MovieService) {
    this.movieService.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        // const objeto_retorno = JSON.parse(response._body)
        this.lista_filmes = response.results;
        console.log(data)
      }, error => {
        console.log(error)
      } 
      )
  }

}
