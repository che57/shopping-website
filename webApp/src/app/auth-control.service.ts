import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UrlCollectionService} from './url-collection.service';

@Injectable({
  providedIn: 'root'
})

export class AuthControlService {
  private readonly authControl;
  private action: string;
  constructor(
    private http: HttpClient,
    private urlCollection: UrlCollectionService
  ) {
    this.authControl = this.urlCollection.getAuthControlUrl();
  }
  signIn (user) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    this.action = '/login';
    return this.http.post(this.authControl + this.action, user, {headers: headers});
  }
  setToken (auth, token, userName, admin) {
    localStorage.setItem('auth', auth);
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    localStorage.setItem('admin', admin);
  }
  signOut () {
    this.action = '/logout';
    return this.http.get(this.authControl + this.action);
  }
  signUp (user) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    this.action = '/register';
    return this.http.post(this.authControl + this.action, user, {headers: headers});
  }
}
