import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlCollectionService {

  private baseUrl = 'https://lab5-backend-3-che57.c9users.io/api';
  private adminUrl = this.baseUrl + '/admin';
  private authUrl = this.baseUrl + '/auth';
  private authControl = this.baseUrl + '/authcontroll';
  constructor() { }
  getBaseUrl() {
    return this.baseUrl;
  }
  getAdminUrl() {
    return this.adminUrl;
  }
  getAuthUrl() {
    return this.authUrl;
  }
  getAuthControlUrl() {
    return this.authControl;
  }
}
