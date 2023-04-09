import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ListResultModel } from '../models/listResultModel';
import { MovieList } from '../models/movieList';
import { UpcomingMovieListResult } from '../models/upcomingMovieListResult';
import { MovieDetail } from '../models/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }
  getDetail(id: number) {
    this.baseUrl = this.baseUrl + `movie/${id}`;
    return this.httpClient.get<MovieDetail>(this.baseUrl, { params: this.params });
  }
  getMovies(endpoint: MovieEndpoint, page: number) {

    const url = this.baseUrl + `movie/${endpoint}`;
    this.params = this.params.append("page", page);
    return this.httpClient.get<ListResultModel<any>>(url, { params: this.params });
  }
}
export enum MovieEndpoint {
  TOP_RATED = "top_rated",
  POPULAR = "popular",
  UPCOMING = "upcoming",
  NOW_PLAYING = "now_playing",
}