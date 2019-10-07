import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  setLoggedUser(id) {
    localStorage.setItem('logged', '1'); // van-e belépett felhasználó
    localStorage.setItem('loggedUserId', id ); // a belépett felhasználó id-ja

  }

  addNewUser(user) {
    let users: any[] = this.getUsers();
    if ( users == null ) {
      users = [user];
    } else {
      users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));
  }

  getLoggedUserId() {
    return localStorage.getItem('loggedUserId');
  }

  getCitiesByUserId(id) {
    const cities: any[] = JSON.parse(localStorage.getItem('cities')); // lekérjük az összes várost
    const userCities: any[] = [];
    cities.forEach( cityy => {
      if ( cityy.userId === id) {
        userCities.push(cityy);
      }
    });
    return userCities;
  }

  addCityByUserId(id, cityname) {
    let cities: any[] = JSON.parse(localStorage.getItem('cities'));
    if (cities == null) {
      cities = [ {userId: id, name: cityname}];
    } else {
      const newCity = {
        userId: id,
        name: cityname
      };
      cities.push(newCity);
    }
    localStorage.setItem('cities', JSON.stringify(cities));
  }
}
