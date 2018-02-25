import { Component } from '@angular/core';
import {AppLoginService} from './app.login.service';
 @Component({
  selector: 'app-root',
  templateUrl: './app.login.html',
   styleUrls: ['../../app.component.css'],
   providers: [AppLoginService]
 })
export class LoginComponent {

username: string;
password: string;
constructor(private appLoginSerive: AppLoginService) {

}
onLogin() {
 /*  if((this.username!==undefined && this.username!==null && this.username!=='')
  &&(this.password!==undefined && this.password!==null && this.password!=='')){
    alert('You have logged in as = '+this.username);
  } else {
    alert ('You need both username and password to login');
  }
} */
//
this.appLoginSerive.getAuthors().subscribe(
  response => {
    console.log(response);
  },
  err => {

}
);


}
 }