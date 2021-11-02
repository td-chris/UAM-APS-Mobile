import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseApiPath = "https://api.themoviedb.org/3"
  private apiKey = "593e8c54a09f237b609683b4923ec5fd"

  constructor(private http: HttpClient) { }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.apiKey)
  }
}