import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [ListComponent]

})
export class GenresModule { }
