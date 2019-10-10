import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { StorageService } from '../storage.service';
import { City } from '../city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {

  @Input() city: City;
  currentWeather: any[] = [];

  constructor( private weatherService: WeatherService) { }

  ngOnChanges() {
    this.currentWeather = [];
    this.weatherService.getCurrentWeather(this.city.name).subscribe(res => {
      this.currentWeather.push(res);
    });
  }
}
