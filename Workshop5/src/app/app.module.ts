import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavLinksComponent } from './fav-links/fav-links.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddmovieformComponent } from './addmovieform/addmovieform.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ChoreListComponent,
    FavPhotosComponent,
    MovieListComponent,
    FavLinksComponent,
    SearchFilterPipe,
    NavbarComponent,
    AddmovieformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
