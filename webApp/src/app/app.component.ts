import { Component, OnInit } from '@angular/core';
import {AuthControlService} from './auth-control.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (
    private authControlService: AuthControlService,
    private router: Router,
    private location: Location
  ) { }
  authDisplay() {
    return (localStorage.getItem('auth') === 'true');
  }
  adminDisplay() {
    return (localStorage.getItem('admin') === 'true');
  }
  signOut() {
    this.authControlService.signOut().subscribe((data) => {
      this.authControlService.setToken(data['auth'], data['token'], data['userName'], data['admin']);
      this.router.navigate(['']);
    });
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }
}
