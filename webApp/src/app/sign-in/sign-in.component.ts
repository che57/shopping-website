import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {AuthControlService} from '../auth-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private authControlService: AuthControlService,
    private router: Router
  ) { }

  signIn(userName: string, password: string) {
    const body = new HttpParams()
      .set('userName', userName)
      .set('password', password);
    this.authControlService.signIn(body.toString()).subscribe((data) => {
      if (data['auth']) {
        this.authControlService.setToken(data['auth'], data['token']);
        this.router.navigate(['']);
      } else {
        alert(data['msg']);
      }
    });
  }
  ngOnInit() {
  }

}
