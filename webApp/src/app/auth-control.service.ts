import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthControlService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Authorization': 'bearer ' + localStorage.getItem('token')
    })
  };
  private i = new HttpHeaders()
    .set( 'Content-Type',  'application/x-www-form-urlencoded');
  private baseUrl = 'https://lab5-backend-3-che57.c9users.io/api';
  private authControl = this.baseUrl + '/authcontroll';
  private authUrl = this.baseUrl + '/auth';
  private action: string;
  constructor(private http: HttpClient) { }
  signIn (user) {
    this.action = '/login';
    return this.http.post(this.authControl + this.action, user, this.httpOptions);
  }
  setToken (auth, token, userName) {
    localStorage.setItem('auth', auth);
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
  }
  signOut () {
    this.action = '/logout';
    return this.http.get(this.authControl + this.action);
  }
  signUp (user) {
    this.action = '/register';
    return this.http.post(this.authControl + this.action, user, this.httpOptions);
  }
  postComment(comment): Observable<any> {
    console.log(this.httpOptions);
    console.log('1: ', this.i);
    this.action = '/comments';

    // let i = new HttpHeaders().set( 'Content-Type',  'application/x-www-form-urlencoded');
    // console.log(i);
    return this.http.post<any>(this.authUrl + this.action, comment, httpOptions);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
