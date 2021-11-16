import { Component, OnInit } from '@angular/core';
import { Imovie } from '../movie';
import { MovieServiceService } from '../utility/movie-service.service';

@Component({
  selector: 'app-fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.scss']
})
export class FavLinksComponent implements OnInit {

  links:string[] = ["https://www.google.co.in/", "https://www.w3schools.com/","https://angularjs.org/"];
  

  public moviesproperty:Imovie[] = [];
  constructor(private _movieservice: MovieServiceService) { }

  ngOnInit(){
    this._movieservice.getMovies()
      .subscribe((data:any) => this.moviesproperty = data);
  }
}
