import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlCollectionService} from '../url-collection.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private action;
  private readonly url;
  constructor(
    private httpClient: HttpClient,
    private urlCollection: UrlCollectionService
  ) {
    this.action = '/items';
    this.url = this.urlCollection.getBaseUrl() + this.action;
  }
  getItems(page) {
    if ((localStorage.getItem('auth') === 'true')) {
      this.action = '/items';
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
      const url = this.urlCollection.getAuthUrl() + this.action + '?page=' + page.toString();
      return this.httpClient.get(url, {headers: headers});
    }
    return this.httpClient.get(this.url);
  }
  getItemsAmount() {
    const url = this.url + '/amount';
    return this.httpClient.get(url);
  }
  getItem(id) {
    const url = this.url + '/' + id;
    return this.httpClient.get(url);
  }
  getItemComments(id) {
    const url = this.url + '/' + id + '/comments';
    return this.httpClient.get(url);
  }
}
