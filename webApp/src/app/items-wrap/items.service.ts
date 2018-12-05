import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsUrl = 'https://lab5-backend-3-che57.c9users.io/api/items';
  authItemsUrl = 'https://lab5-backend-3-che57.c9users.io/api/auth/items';
  constructor(private httpClient: HttpClient) { }
  getItems(page) {
    if ((localStorage.getItem('auth') === 'true')) {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'));      const url = this.authItemsUrl + '?page=' + page.toString();
      return this.httpClient.get(url, {headers: headers});
    }
    return this.httpClient.get(this.itemsUrl);
  }
  getItemsAmount() {
    const url = this.itemsUrl + '/amount';
    return this.httpClient.get(url);
  }
  getItem(id) {
    const url = this.itemsUrl + '/' + id;
    return this.httpClient.get(url);
  }
  getItemComments(id) {
    const url = this.itemsUrl + '/' + id + '/comments';
    return this.httpClient.get(url);
  }
}
