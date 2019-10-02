import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from '../city';
import { CITIES } from '../mock-cities'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeathertoCity(): City[] {
    return CITIES;
  }
  //private heroesUrl = 'api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }
}
