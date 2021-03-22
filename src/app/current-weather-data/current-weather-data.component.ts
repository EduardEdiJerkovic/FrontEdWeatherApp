import { Component, OnInit } from '@angular/core';

import { Accessory } from '../models/accessory.model';
import { AstronomyData } from '../models/astronomy.model';
import { WeatherService } from '../services/weather.service';
import { CurrentWeatherData } from './../models/current-weather-data.model';

@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.css'],
})
export class CurrentWeatherDataComponent implements OnInit {
  currentWeather: CurrentWeatherData;
  airQualityAndWeather: CurrentWeatherData;

  astronomyData: AstronomyData;
  accessories: Accessory[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getCurrentWeatherData();
    this.getWeatherAndAirQuality();
    this.getAstronomyData();
  }

  getCurrentWeatherData() {
    this.weatherService.getCurrentWeatherData().subscribe((response) => {
      (this.currentWeather = response.body), console.log(this.currentWeather);
    });
  }

  getWeatherAndAirQuality() {
    this.weatherService.getWeatherAndAirQuality().subscribe((response) => {
      (this.airQualityAndWeather = response.body),
        console.log(this.airQualityAndWeather);
    });
  }

  getAstronomyData() {
    this.weatherService.getAstronomyData().subscribe((response) => {
      (this.astronomyData = response.body), console.log(this.astronomyData);
    });
  }
}
