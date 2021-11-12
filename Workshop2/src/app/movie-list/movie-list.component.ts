import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: string[] = ["Harry potter","the Terminator", "The dark knight", "Inception"];
  watchedmovies: string[] = ["Catch me if you can","The Godfather", "Toy story"];

  moviearray = [
    {name:'Harry potter', link:'https://4.bp.blogspot.com/-PDZs22feSOs/WnP4Kco03aI/AAAAAAAAAIE/r6LdLGP1CUA8uYMoiHP0sg11XhOtwJgZACLcBGAs/s1600/Goblet_of_Fire_Film_Poster.jpg'},
    {name:'the Terminator', link:'https://comicvine1.cbsistatic.com/uploads/original/12/129064/2475765-terminator1.jpg'}
  ]

  watchedmoviearray = [
    {name:'Toy story', link:'https://www.cineworld.co.uk/xmedia-cw/repo/articles/other/INSIDE_OUT_BODY_15.png'}
  ]

  addMovieToWatched(i:number, name1:string, link1:string){
    var m1 = {name:name1, link:link1};
    this.moviearray.splice(i,1);
    this.watchedmoviearray.push(m1);
    
    
  };

  remove(i:number, name1:string, link1:string){
    var m1 = {name:name1, link:link1};
    this.moviearray.push(m1);
    this.watchedmoviearray.splice(i,1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
