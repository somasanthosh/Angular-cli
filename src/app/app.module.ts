import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
 
import { AppComponent } from './app.component';
import {AdminComponent} from './components/Admin/app.admin';
import {LoginComponent} from './components/Login/app.login';
import {HomeComponent} from  './components/Home/app.home';
import {RegisterComponent} from './components/Register/app.register';
import {appRoutes}  from './routing/app-routing.module';
import {PageNotFoundComponent} from  './components/PageNotFound/app.pagenotfound';
import {WelcomeComponent} from './components/Welcome/app.welcome';
import {FormsModule} from '@angular/forms';
import {FilterByErrorType} from './components/Home/app.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
 @NgModule({
  declarations: [
    AppComponent,AdminComponent,HomeComponent,RegisterComponent,LoginComponent,PageNotFoundComponent,
    WelcomeComponent, FilterByErrorType
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,NgbModule.forRoot(), HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
