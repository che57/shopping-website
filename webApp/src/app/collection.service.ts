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
  postCollectionItem(cItem) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collectionItems';
    return this.http.post(this.authUrl + this.action, cItem, {headers: headers});
  }
  getCollectionItems(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collections/' + id + '/collectionItems';
    return this.http.get(this.authUrl + this.action, {headers: headers});
  }
  getCollectionInfo(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collections/' + id;
    return this.http.get(this.authUrl + this.action, {headers: headers});
  }
  putCollectionInfo(id, collection) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collections/' + id;
    return this.http.put(this.authUrl + this.action, collection, {headers: headers});
  }
  putCollectionItem(cTId, cItem) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collectionItems/' + cTId;
    return this.http.put(this.authUrl + this.action, cItem, {headers: headers});
  }
  deleteCollectionItem(cTId) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collectionItems/' + cTId;
    return this.http.delete(this.authUrl + this.action, {headers: headers});
  }
  deleteCollection(cId) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/collections/' + cId;
    return this.http.delete(this.authUrl + this.action, {headers: headers});
  }
}
