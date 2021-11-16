import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmovieform',
  templateUrl: './addmovieform.component.html',
  styleUrls: ['./addmovieform.component.scss']
})
export class AddmovieformComponent implements OnInit {

  addMovieFunction(value:any){
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
