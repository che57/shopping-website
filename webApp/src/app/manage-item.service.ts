import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlCollectionService} from './url-collection.service';

@Injectable({
  providedIn: 'root'
})
export class ManageItemService {
  private readonly adminUrl;
  private action: string;
  constructor(
    private http: HttpClient,
    private urlCollection: UrlCollectionService
  ) {
    this.adminUrl = this.urlCollection.getAdminUrl();
  }
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
    this.action = '/items';
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
