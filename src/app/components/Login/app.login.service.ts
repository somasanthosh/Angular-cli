import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {} from 'rxjs';
import { errorData } from '../Home/error';

@Injectable()
export class AppLoginService {

constructor(private http :HttpClient) {

}
getAuthors() {

    return this.http.get('https://fakerestapi.azurewebsites.net/api/Authors');
}

}