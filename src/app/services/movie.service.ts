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
  getPopular(page:number) {
    this.params=this.params.append("page",page);
    this.baseUrl=this.baseUrl+'movie/popular'
    return this.httpClient.get<ListResultModel<MovieList>>(this.baseUrl,{params:this.params});
  }
  getTopRated(page:number) {
    this.params=this.params.append("page",page);
    this.baseUrl=this.baseUrl+'movie/top_rated'
    return this.httpClient.get<ListResultModel<MovieList>>(this.baseUrl,{params:this.params});
  }
  getUpcoming(page:number) {
    this.params=this.params.append("page",page);
    this.baseUrl=this.baseUrl+'movie/upcoming'
    return this.httpClient.get<UpcomingMovieListResult>(this.baseUrl,{params:this.params});
  }
  getDetail(id:number) {
    this.baseUrl=this.baseUrl+`movie/${id}`;
    return this.httpClient.get<MovieDetail>(this.baseUrl,{params:this.params});
  }
}
