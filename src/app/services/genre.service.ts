import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResultModel } from '../models/listResultModel';
import { BaseService } from './base.service';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService  extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
  }
  getMovieList() {
    this.baseUrl=this.baseUrl+'genre/movie/list'
    return this.httpClient.get<any>(this.baseUrl,{params:this.params});
  }
}
