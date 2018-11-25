import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthControlService {
  private userUrl = 'https://lab5-backend-3-che57.c9users.io/api/authcontroll';
  private action: string;
  private token;
  private auth;
  constructor(private http: HttpClient) { }
  signIn (user) {
    this.action = '/login';
    return this.http.post(this.userUrl + this.action, user, httpOptions);
  }
  setToken (token, auth) {
    this.token = token;
    this.auth = auth;
  }
}
