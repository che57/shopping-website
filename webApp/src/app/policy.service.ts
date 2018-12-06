import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlCollectionService} from './url-collection.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private readonly adminUrl;
  private readonly baseUrl;
  private action;
  constructor(
    private http: HttpClient,
    private urlCollection: UrlCollectionService
  ) {
    this.adminUrl = this.urlCollection.getAdminUrl();
    this.baseUrl = this.urlCollection.getBaseUrl();
  }
  putPolicy(policy) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/policy';
    return this.http.put(this.adminUrl + this.action, policy, {headers: headers});
  }
  getPolicy() {
    this.action = '/policy';
    return this.http.get(this.baseUrl + this.action);
  }
  putDMCA(dmca) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/dmca';
    return this.http.put(this.adminUrl + this.action, dmca, {headers: headers});
  }
}
