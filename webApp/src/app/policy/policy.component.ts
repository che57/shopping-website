import { Component, OnInit } from '@angular/core';
import {PolicyService} from '../policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  private policy;
  private dmca;
  constructor(
    private policyService: PolicyService
  ) {
    this.renderPolicy();
  }

  ngOnInit() {
  }
  renderPolicy() {
    this.policyService.getPolicy().subscribe((data) => {
      this.policy = data[0]['content'];
      this.dmca = data[1]['content'];
    });
  }
  checkAdmin() {
    return (localStorage.getItem('admin') === 'true');
  }
}
