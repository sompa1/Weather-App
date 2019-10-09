import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { StorageService } from '../storage.service';
import { Observable } from 'rxjs';
import { City } from '../city';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newCity = '';
  currentCity;

  public cities: City[];

  constructor(private weatherService: WeatherService, private storageService: StorageService ) { }

  ngOnInit() {
    this.cities = this.storageService.getCitiesByUserId(this.storageService.getLoggedUserId());
  }

  addNewCity(cityName) {
    this.newCity = cityName;
    // console.log(cityName);
    this.weatherService.getCurrentWeather(this.newCity).subscribe(res => {
    // this.currentCity = new City(this.storageService.getLoggedUserId(), this.newCity, res);
    console.log(res);
    });
    this.storageService.addCityByUserId(this.storageService.getLoggedUserId(), this.newCity);
    this.cities = this.storageService.getCitiesByUserId(this.storageService.getLoggedUserId());
    // this.actualCity = this.cities[0];
  }

}
