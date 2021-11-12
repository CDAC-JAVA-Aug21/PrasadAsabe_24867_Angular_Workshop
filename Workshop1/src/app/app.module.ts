import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavLinksComponent } from './fav-links/fav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoreListComponent,
    FavPhotosComponent,
    MovieListComponent,
    FavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
