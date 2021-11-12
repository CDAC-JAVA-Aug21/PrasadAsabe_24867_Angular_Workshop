import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.scss']
})
export class FavPhotosComponent implements OnInit {

  photos: string[] = ["./assets/1.jfif","./assets/2.jfif", "./assets/3.jfif", "./assets/4.jpg"];
  constructor() { }

  ngOnInit(): void {
  }

}
