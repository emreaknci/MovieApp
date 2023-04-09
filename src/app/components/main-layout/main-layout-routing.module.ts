import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as MovieListComponent } from './movies/list/list.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie/popular', pathMatch: 'full' },
  { path: 'home', redirectTo: 'movie/popular', pathMatch: 'full' },
  { path: 'movie', redirectTo: 'movie/popular', pathMatch: 'full' },
  {
    path: '', component: MainLayoutComponent, children: [
      { path: 'movie/:param&page:page', component: MovieListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
