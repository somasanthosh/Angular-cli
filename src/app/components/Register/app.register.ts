import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.register.html',
   styleUrls: ['../../app.component.css']
 })
export class RegisterComponent {

firstname: string;
lastname: string;
address: string;
city: string;
state: string;
password: string;
confirmpassword: string;

onRegister() {
  if(this.firstname!==undefined || this.lastname!==undefined || this.address!==undefined
  || this.city!==undefined || this.state!==undefined || this.password!==undefined
|| this.confirmpassword!==undefined){
  alert(this.firstname+'you have registered');
} else {
alert('You need all the fields to be entered to register');
}
}

  
 }