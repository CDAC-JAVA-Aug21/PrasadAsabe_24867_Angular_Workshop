import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieformComponent } from './addmovieform/addmovieform.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  { path :'addmovie', component:AddmovieformComponent},
  { path :'viewmovie', component:MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
