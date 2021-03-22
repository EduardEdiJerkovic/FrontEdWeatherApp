import { CurrentWeatherData } from './../models/current-weather-data.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Accessory } from '../models/accessory.model';

@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.css']
})
export class CurrentWeatherDataComponent implements OnInit {

  currentWeather: CurrentWeatherData;
  airQualityAndWeather: CurrentWeatherData;
  pressureRainAndIndex: CurrentWeatherData;
  accessories: Accessory[] = [];

  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.getCurrentWeatherData();
    this.getWeatherAndAirQuality();
    this.getPressureRainAndIndex();
  }

  getCurrentWeatherData() {
    this.weatherService.getCurrentWeatherData().subscribe((response) => {
      this.currentWeather = response.body,
        console.log(this.currentWeather)
    }
    )
  }

  getWeatherAndAirQuality() {
    this.weatherService.getWeatherAndAirQuality().subscribe((response) => {
      this.airQualityAndWeather = response.body,
        console.log(this.airQualityAndWeather)
    }
    )
  }

  getPressureRainAndIndex() {
    this.weatherService.getPressureRainAndIndex().subscribe((response) => {
      this.pressureRainAndIndex = response.body,
        console.log(this.pressureRainAndIndex)
    }
    )
  }

}
