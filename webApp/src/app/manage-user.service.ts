import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlCollectionService} from './url-collection.service';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {
  private readonly adminUrl;
  private action: string;
  constructor(
    private http: HttpClient,
    private urlCollection: UrlCollectionService
  ) {
    this.adminUrl = this.urlCollection.getAdminUrl();
  }
  getAllUsers() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/users';
    return this.http.get(this.adminUrl + this.action, {headers: headers});
  }
  putUser(id, user) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/users/';
    return this.http.put(this.adminUrl + this.action + id, user, {headers: headers});
  }
  deleteUser(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/users/';
    return this.http.delete(this.adminUrl + this.action + id, {headers: headers});
  }
}
