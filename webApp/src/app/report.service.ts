import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlCollectionService} from './url-collection.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private readonly adminUrl;
  private readonly baseUrl;
  private action: string;
  constructor(
    private http: HttpClient,
    private urlCollection: UrlCollectionService
  ) {
    this.adminUrl = this.urlCollection.getAdminUrl();
    this.baseUrl = this.urlCollection.getBaseUrl();
  }
  postReport(report) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/report';
    return this.http.post(this.baseUrl + this.action, report, {headers: headers});
  }
  getReports() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    this.action = '/report';
    return this.http.get(this.adminUrl + this.action, {headers: headers});
  }
}
