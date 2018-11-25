import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsUrl = 'https://lab5-backend-3-che57.c9users.io/api/items';
  constructor(private httpClient: HttpClient) { }
  getItems(page) {
    const url = this.itemsUrl + '?page=' + page.toString();
    return this.httpClient.get(url);
  }
  getItemsAmount() {
    const url = this.itemsUrl + '/amount';
    return this.httpClient.get(url);
  }
}
