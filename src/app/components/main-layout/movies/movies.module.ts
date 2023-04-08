import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { GenresModule } from '../genres/genres.module';



@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    GenresModule
  ],
  exports: [ListComponent]
})
export class MoviesModule { }
