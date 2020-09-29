import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  BaseURL = environment.BaseURL;
  joinClass(data) {
    let URL = this.BaseURL + `class/join/${data}`;
    return this.http.post<any>(URL ,'',{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});
  }
  getClassList() {
    let URL = this.BaseURL + `class`;
    return this.http.get<any>(URL,{headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});
  }
}
