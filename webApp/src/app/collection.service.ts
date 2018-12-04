import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private baseUrl = 'https://lab5-backend-3-che57.c9users.io/api';
  private authUrl = this.baseUrl + '/auth';
  private action: string;
  constructor(private http: HttpClient) { }
  postCollection(collection) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collections';
    return this.http.post(this.authUrl + this.action, collection, {headers: headers});
  }
  getPublicCollection() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collections';
    return this.http.get(this.authUrl + this.action, {headers: headers});
  }
  getMyCollection() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/users/collections';
    return this.http.get(this.authUrl + this.action, {headers: headers});
  }
}