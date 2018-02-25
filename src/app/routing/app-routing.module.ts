 import { Routes, RouterModule } from '@angular/router';
 import {NgModule} from '@angular/core';

 import { AppComponent } from '../app.component';
import {AdminComponent} from '../components/Admin/app.admin';
import {LoginComponent} from '../components/Login/app.login';
import {HomeComponent} from  '../components/Home/app.home';
import {RegisterComponent} from '../components/Register/app.register';
import {PageNotFoundComponent} from  '../components/PageNotFound/app.pagenotfound';
import {WelcomeComponent} from '../components/Welcome/app.welcome'



  export const appRoutes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'',component:WelcomeComponent},
    {path:'**',component:PageNotFoundComponent}
  ];



 
