import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { PersonsModule } from './persons/persons.module';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { MainLayoutComponent } from './main-layout.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    PersonsModule, 
    MoviesModule, 
    GenresModule
  ]
})
export class MainLayoutModule { }
