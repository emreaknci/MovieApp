import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private genreService: GenreService) { }
  ngOnInit(): void {
    this.getGenres()
  }

  genres: Genre[];
  getGenres() {
    this.genreService.getMovieList().subscribe({
      next: (v) => { 
        this.genres = v.genres ;
      }
    })
  }
}
