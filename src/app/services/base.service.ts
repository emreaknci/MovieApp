import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }
  baseImageUrl = "http://image.tmdb.org/t/p/original";
  protected baseUrl='https://api.themoviedb.org/3/';
  private apiKey='25ebf0905d1dd5f929f6c4876b97ffe2'
  protected params = new HttpParams()
      .append("api_key", this.apiKey)
      .append("language","tr-TR" )
}
