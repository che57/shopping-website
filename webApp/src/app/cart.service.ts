import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'https://lab5-backend-3-che57.c9users.io/api';
  private authUrl = this.baseUrl + '/auth';
  private action: string;
  constructor(private http: HttpClient) { }
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
