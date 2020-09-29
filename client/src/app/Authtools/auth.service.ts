import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  BaseURL = environment.BaseURL+"user/";
  login(data) {
    let URL = this.BaseURL + 'login';
    return this.http.post<any>(URL, data);
  }
  register(data) {
    let URL = this.BaseURL + 'signup';
    return this.http.post<any>(URL, data);
  }
  getUser() {
    let URL = this.BaseURL ;
    return this.http.get<any>(URL);
  }
}
