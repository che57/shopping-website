import { Component, OnInit } from '@angular/core';
import {ManageUserService} from '../manage-user.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  private users;
  constructor(
    private manageUserService: ManageUserService
  ) {
    this.renderUsers();
  }

  ngOnInit() {
  }
  renderUsers() {
    this.manageUserService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
  grantSMP(id) {
    const body = new HttpParams()
      .set('isAdmin', 'true');
    this.manageUserService.putUser(id, body.toString()).subscribe((res) => {
      console.log(res);
      this.renderUsers();
    });
  }
  deactivateUser(id) {
    const body = new HttpParams()
      .set('state', '0');
    this.manageUserService.putUser(id, body.toString()).subscribe((res) => {
      console.log(res);
      this.renderUsers();
    });
  }
  activateUser(id) {
    const body = new HttpParams()
      .set('state', '1');
    this.manageUserService.putUser(id, body.toString()).subscribe((res) => {
      console.log(res);
      this.renderUsers();
    });
  }
  checkSMP(isAdmin) {
    return (isAdmin === true);
  }
  checkActivate(state) {
    return (state === 1);
  }
  deleteUser(id) {
    this.manageUserService.deleteUser(id).subscribe((res) => {
      console.log(res);
      this.renderUsers();
    });
  }
}
