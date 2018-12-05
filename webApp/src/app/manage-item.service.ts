import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageItemService {
  private baseUrl = 'https://lab5-backend-3-che57.c9users.io/api';
  private adminUrl = this.baseUrl + '/admin';
  private action: string;
  constructor(private http: HttpClient) { }
  putItem(id, item) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/items/';
    return this.http.put(this.adminUrl + this.action + id, item, {headers: headers});
  }
  postItem(item) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/users';
    return this.http.post(this.adminUrl + this.action, item, {headers: headers});
  }
  deleteItem(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/items/';
    return this.http.delete(this.adminUrl + this.action + id, {headers: headers});
  }
}
