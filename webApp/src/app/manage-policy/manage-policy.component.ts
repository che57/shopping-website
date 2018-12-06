import { Component, OnInit } from '@angular/core';
import {PolicyService} from '../policy.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-manage-policy',
  templateUrl: './manage-policy.component.html',
  styleUrls: ['./manage-policy.component.css']
})
export class ManagePolicyComponent implements OnInit {
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
  saveChange(policy) {
    const body = new HttpParams()
      .set('content', policy);
    this.policyService.putPolicy(body.toString()).subscribe((res) => {
      alert(res['msg']);
      this.renderPolicy();
    });
  }
  saveDMCA(dmca) {
    const body = new HttpParams()
      .set('content', dmca);
    this.policyService.putDMCA(body.toString()).subscribe((res) => {
      alert(res['msg']);
      this.renderPolicy();
    });
  }
}
