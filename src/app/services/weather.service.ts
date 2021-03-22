import { CurrentWeatherData } from '../models/current-weather-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(protected http: HttpClient) {}

  public getCurrentWeatherData(town='Split') {
    return this.http.get<CurrentWeatherData>('http://api.weatherapi.com/v1/current.json?key='
    + environment.apiKey +
    `&q=${town}`,
    { observe: 'response', responseType: 'json' });
  }

  public getWeatherAndAirQuality(town='Split') {
    return this.http.get<CurrentWeatherData>('http://api.weatherapi.com/v1/current.json?key='
    + environment.apiKey +
    `&q=${town}&aqi=yes`,
    { observe: 'response', responseType: 'json' });
  }

  public getDailyWeatherByCityName(city: string) {
    const url: string = `http://api.weatherapi.com/v1/forecast.json?key=${environment.apiKey}&q=${city}&days=3&aqi=no`;

    return this.http.get(url);
  }

}
