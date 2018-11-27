import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {AuthControlService} from '../auth-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // @Output() refresh = new EventEmitter();
  constructor(
    private authControlService: AuthControlService,
    private router: Router
  ) { }

  signUp(userName: string, password: string, isAdmin: boolean) {
    const body = new HttpParams()
      .set('userName', userName)
      .set('password', password)
      .set('isAdmin', isAdmin.toString());
    this.authControlService.signUp(body.toString()).subscribe((res) => {
      if (res['isRegistered']) {
        this.authControlService.signIn(body.toString()).subscribe((data) => {
          if (data['auth']) {
            this.authControlService.setToken(data['auth'], data['token'], data['userName']);
            this.router.navigate(['']);
          } else {
            alert(data['msg']);
          }
        });
      } else {
        if (res['msg']) {
          alert(res['msg']);
        } else {
          alert('fail to verify email');
        }
      }
    });
  }
  ngOnInit() {
  }

}
