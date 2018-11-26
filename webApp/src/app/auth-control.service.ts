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
  constructor(private http: HttpClient) { }
  signIn (user) {
    this.action = '/login';
    return this.http.post(this.userUrl + this.action, user, httpOptions);
  }
  setToken (auth, token) {
    localStorage.setItem('auth', auth);
    localStorage.setItem('token', token);
  }
  signOut () {
    this.action = '/logout';
    return this.http.get(this.userUrl + this.action);
  }
  signUp (user) {
    this.action = '/register';
    return this.http.post(this.userUrl + this.action, user, httpOptions);
  }
}
