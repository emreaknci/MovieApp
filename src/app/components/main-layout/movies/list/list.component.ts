import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListResultModel } from 'src/app/models/listResultModel';
import { MovieEndpoint, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.urlParam = this.route.snapshot.url[1].path;
      this.getMovies(1);
    })
  }
  urlParam = "";
  title = "Popüler Filmler";
  result: ListResultModel<any>;
  imagePath = this.movieService.baseImageUrl;

  currentPageNo: number;
  totalCount: number;
  totalPageCount: number;
  pageList: number[] = [];
  getMovies(page: number) {
    let endpoint = MovieEndpoint.POPULAR;
    switch (this.urlParam) {
      case MovieEndpoint.NOW_PLAYING:
        endpoint = MovieEndpoint.NOW_PLAYING;
        this.title = "Gösterimdekiler";
        break;
      case MovieEndpoint.UPCOMING:
        endpoint = MovieEndpoint.UPCOMING;
        this.title = "Yakında";
        break;
      case MovieEndpoint.TOP_RATED:
        endpoint = MovieEndpoint.TOP_RATED;
        this.title = "En Fazla Oy Alanlar";
        break;
      default:
        endpoint = MovieEndpoint.POPULAR;
        this.title = "Popüler Filmler";
        this.urlParam = MovieEndpoint.POPULAR;
        break;
    }
    this.movieService.getMovies(endpoint, page).subscribe({
      next: (v) => {
        {
          this.result = v;
          this.totalCount = this.result.total_results;
          this.totalPageCount = this.result.total_pages;
          this.currentPageNo = this.result.page
          this.pageList = [];

          if (this.currentPageNo - 6 <= 0)
            for (let i = 1; i <= 9; i++)
              this.pageList.push(i);

          else if (this.currentPageNo + 6 >= this.totalPageCount)
            for (let i = this.totalPageCount - 6; i <= this.totalPageCount; i++)
              this.pageList.push(i);

          else
            for (let i = this.currentPageNo - 4; i <= this.currentPageNo + 4; i++)
              this.pageList.push(i);
        }
      }
    });
  }
  changePage() {

  }

}
