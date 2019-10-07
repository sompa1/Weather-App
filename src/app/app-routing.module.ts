import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService as CheckAuth} from '../app/authentication.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [CheckAuth]},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CheckAuth]
})
export class AppRoutingModule { }
