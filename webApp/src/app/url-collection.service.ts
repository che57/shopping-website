import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlCollectionService {

  private baseUrl = 'http://localhost:80/api';
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
