import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../utility/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: string[] = ["Harry potter","the Terminator", "The dark knight", "Inception"];
  watchedmovies: string[] = ["Catch me if you can","The Godfather", "Toy story"];
  searchBy:string = "";
 
  moviearray = [
    {name:'Harry potter', director:'david yates', releaseDate: '1999-10-11',link:'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Harry-Potter-Survived-Killing-Curse-Theory.jpg'},
    {name:'the Terminator',director:'james cameron', releaseDate: '1988-08-25', link:'https://comicvine1.cbsistatic.com/uploads/original/12/129064/2475765-terminator1.jpg'},
    {name:'catch me if you can',director:'stefen spielberg', releaseDate: '2002-02-15', link:'https://sitetree213.weebly.com/uploads/1/2/3/9/123954941/669167968.jpg'}
  ]

  watchedmoviearray = [
    {name:'Toy story', director:'john lassetor', releaseDate: '1998-05-03',link:'https://www.cineworld.co.uk/xmedia-cw/repo/articles/other/INSIDE_OUT_BODY_15.png'},
    {name:'The dar knight', director:'christopher nolan', releaseDate: '2008-08-07',link:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/Dark-Knight-FI.jpg'}
  ]

  addMovieToWatched(i:number, name1:string, director1:string, date1:string, link1:string){
    var m1 = {name:name1, director:director1, releaseDate:date1, link:link1};
    this.moviearray.splice(i,1);
    this.watchedmoviearray.push(m1);
    
    
  };

  remove(i:number, name1:string, director1:string, date1:string, link1:string){
    var m1 = {name:name1,director:director1, releaseDate:date1, link:link1};
    this.moviearray.push(m1);
    this.watchedmoviearray.splice(i,1);
  }

  public moviesproperty = [];
  constructor(private _movieservice: MovieServiceService) { }

  ngOnInit(){
    this._movieservice.getMovies()
      .subscribe((data:any) => this.moviesproperty = data);
  }

}
