import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

  public isLogged = false; // senki nincs belogolva

  constructor(public router: Router) { }

  canActivate(): boolean {
    this.isLogged = ( localStorage.getItem('logged') !== null) ? true : false;

    if (!this.isLogged) { // ha nincs belépett felhasználó
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
