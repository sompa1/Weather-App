import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { User } from '../user';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    id: 0,
    userName: '',
    password: ''
  };
  users: User[] = [];

  loginError = false;
  inputError = false;

  loginForm = new FormGroup( {
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor( public router: Router, public storageService: StorageService) { }

  ngOnInit() { // a users tömbbe kigyűjtjük a már létező usereket az inicializálás során
    if (this.storageService.getUsers()) {
      this.users = this.storageService.getUsers();
    }
  }

  loginClicked() {
    let found = false;
    this.users.forEach( userr => {
      if (userr.userName === this.user.userName) {
        found = true;
        if (userr.password === this.user.password) {
          this.storageService.setLoggedUser(userr.id); // beállítjuk, hogy ő a bejelentkezett user
          this.router.navigate(['home']); // beléptetjük az oldalára
        } else {
          this.loginError = true;
        }
      }
    });

    if (!found) {
      this.user.id = this.users.length;
      this.storageService.addNewUser(this.user);
      this.storageService.setLoggedUser(this.user.id);
      this.router.navigate(['home']);
    }

  }

  checkInputs() {
    if (this.user.userName === '' || this.user.password === '') {
      this.inputError = true;
      this.loginError = false;
      return false;
    }
    this.inputError = false;
    return true;
  }


}
