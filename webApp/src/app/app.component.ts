import { Component, OnInit } from '@angular/core';
import {AuthControlService} from './auth-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (
    private authControlService: AuthControlService,
    private router: Router
  ) { }
  authDisplay() {
    return (localStorage.getItem('auth') === 'true');
  }
  signOut() {
    this.authControlService.signOut().subscribe((data) => {
      this.authControlService.setToken(data['auth'], data['token']);
      this.router.navigate(['']);
    });
  }
  ngOnInit() {
  }
}
