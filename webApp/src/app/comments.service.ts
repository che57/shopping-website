import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = 'https://lab5-backend-3-che57.c9users.io/api/auth/comments';
  constructor(private http: HttpClient) { }
  postComment (c) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(this.url, c, {headers: headers});
  }
}
