import { City } from '../models/city.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitySearch } from '../models/city-search.model';


@Injectable({
  providedIn: 'root',
})
export class CitySearchService {

  constructor(protected http: HttpClient) {}

  public getCities() {
    return this.http.get<CitySearch>('https://countriesnow.space/api/v0.1/countries/population/cities');
  }
}