import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthControlService {
  private i = new HttpHeaders()
    .set( 'Content-Type',  'application/x-www-form-urlencoded');
  private baseUrl = 'https://lab5-backend-3-che57.c9users.io/api';
  private authControl = this.baseUrl + '/authcontroll';
  private authUrl = this.baseUrl + '/auth';
  private action: string;
  constructor(private http: HttpClient) { }
  signIn (user) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    this.action = '/login';
    return this.http.post(this.authControl + this.action, user, {headers: headers});
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
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    this.action = '/register';
    return this.http.post(this.authControl + this.action, user, {headers: headers});
  }
  addToCart (cItem) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/cartItems';
    return this.http.post(this.authUrl + this.action, cItem, {headers: headers});
  }
  getCartItems () {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/users/cartItems';
    return this.http.get(this.authUrl + this.action, {headers: headers});
  }
  deleteCartItem(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/cartItems/';
    return this.http.delete(this.authUrl + this.action + id, {headers: headers});
  }
  checkOutCart() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/users/cartItems/checkOut';
    return this.http.delete(this.authUrl + this.action, {headers: headers});
  }
}
