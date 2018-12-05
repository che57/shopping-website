import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private baseUrl = 'https://lab5-backend-3-che57.c9users.io/api'
  private authUrl = this.baseUrl + '/auth/comments';
  private adminUrl = this.baseUrl + '/admin/comments'
  constructor(private http: HttpClient) { }
  postComment(c) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(this.authUrl, c, {headers: headers});
  }
  putComment(id, c) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(this.adminUrl + '/' + id, c, {headers: headers});
  }
}
