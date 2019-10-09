import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appID = 'a14a9432ece50054729fcb301d820f17';

  getCurrentWeather(cityName): Observable <any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + this.appID);
  }

  getForecast5Weather(cityName): Observable <any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + this.appID + '&units=metric');
  }

  constructor(private http: HttpClient) { }
}
