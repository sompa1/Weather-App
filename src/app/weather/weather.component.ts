import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { StorageService } from '../storage.service';
import { City } from '../city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnChanges {

  @Input() city: City;
  resobj: any;
  temperature: string;
  humidity: string;
  pressure: string;
  windspeed: string;
  winddeg: string;

  constructor( private weatherService: WeatherService, private storageService: StorageService) { }

  ngOnInit() {
  }

  ngOnChanges() {

    if ( this.city !== null ) {
      this.weatherService.getCurrentWeather(this.city).subscribe(res => {
        this.resobj = JSON.parse(res);
    });
    this.temperature = this.resobj.main.temp;
    this.pressure = this.resobj.main.pressure;
    this.humidity = this.resobj.main.humidity;
    this.windspeed = this.resobj.wind.speed;
    this.winddeg = this.resobj.wind.deg;
  }
}

}
