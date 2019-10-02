import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private heroesUrl = 'api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }
}
