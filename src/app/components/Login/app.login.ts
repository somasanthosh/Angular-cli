import { Component } from '@angular/core';
 @Component({
  selector: 'app-root',
  templateUrl: './app.login.html',
   styleUrls: ['../../app.component.css']
 })
export class LoginComponent {

username: string;
password: string;

onLogin() {
  if((this.username!==undefined && this.username!==null && this.username!=='')
  &&(this.password!==undefined && this.password!==null && this.password!=='')){
    alert('You have logged in as = '+this.username);
  } else {
    alert ('You need both username and password to login');
  }
}
  
 }