import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AstronomyData } from '../models/astronomy.model';
import { City } from '../models/city.model';
import { CurrentWeatherData } from '../models/current-weather-data.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(protected http: HttpClient) {}

  public getCurrentWeatherData(town = 'Split') {
    return this.http.get<CurrentWeatherData>(
      'http://api.weatherapi.com/v1/current.json?key=' +
        environment.apiKey +
        `&q=${town}`,
      { observe: 'response', responseType: 'json' }
    );
  }

  public getWeatherAndAirQuality(town = 'Split') {
    return this.http.get<CurrentWeatherData>(
      'http://api.weatherapi.com/v1/current.json?key=' +
        environment.apiKey +
        `&q=${town}&aqi=yes`,
      { observe: 'response', responseType: 'json' }
    );
  }

  public getDailyWeatherByCityName(city: string) {
    const url: string = `http://api.weatherapi.com/v1/forecast.json?key=${environment.apiKey}&q=${city}&days=3&aqi=no`;

    return this.http.get(url);
  }

  /**
   * Fetch astronomy data for sun and moon.
   * @param city City for which data will be fetched.
   * @param date Date for which data will be fetched.
   */
  public getAstronomyData(
    city: City = { name: 'Zagreb', date: '2021-03-22', localTime: null }
  ) {
    const astronomyUrl = 'http://api.weatherapi.com/v1/astronomy.json?';
    const url: string =
      astronomyUrl +
      [
        this.makeParam('key', environment.apiKey),
        this.makeParam('q', city.name),
        this.makeParam('dt', city.date),
      ].join('&');

    return this.http.get<AstronomyData>(url, {
      observe: 'response',
      responseType: 'json',
    });
  }

  /** Helper method for making param for API calls */
  private makeParam(key: string, value: string) {
    return key + '=' + value;
  }
}
