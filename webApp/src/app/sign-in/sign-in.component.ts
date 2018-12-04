import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {AuthControlService} from '../auth-control.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private authControlService: AuthControlService,
    private router: Router,
    private location: Location
  ) { }

  signIn(userName: string, password: string) {
    if (userName === '') {
      alert('Please Input User Name!');
      return;
    }  else if (password === '') {
      alert('Please Input Password!');
      return;
    }
    const body = new HttpParams()
      .set('userName', userName)
      .set('password', password);
    this.authControlService.signIn(body.toString()).subscribe((data) => {
      if (data['auth']) {
        this.authControlService.setToken(data['auth'], data['token'], data['userName']);
        // this.router.navigate(['']);
        this.location.back();
      } else {
        alert(data['msg']);
      }
    });
  }
  ngOnInit() {
  }

}
