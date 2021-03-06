import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlCollectionService} from './url-collection.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly authUrl;
  private readonly adminUrl;
  private action = '/comments';
  constructor(
    private http: HttpClient,
    private urlCollection: UrlCollectionService
  ) {
    this.authUrl = this.urlCollection.getAuthUrl();
    this.adminUrl = this.urlCollection.getAdminUrl();
  }
  postComment(c) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(this.authUrl + this.action, c, {headers: headers});
  }
  putComment(id, c) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(this.adminUrl + this.action +  '/' + id, c, {headers: headers});
  }
  getComment() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get(this.adminUrl + this.action, {headers: headers});
  }
}
