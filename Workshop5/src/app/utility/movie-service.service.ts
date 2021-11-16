import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imovie } from '../movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private _url = '/assets/data/movies.json';
  constructor(private http:HttpClient) { };

  getMovies():Observable<Imovie[]>{
    return this.http.get<Imovie[]>(this._url);
  };
}
