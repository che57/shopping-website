import { Component, OnInit } from '@angular/core';
import {ReportService} from '../report.service';
import {HttpParams} from '@angular/common/http';
import {CommentsService} from '../comments.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  private notices;
  constructor(
    private reportService: ReportService,
    private commentsService: CommentsService
  ) {
    this.renderNotice();
  }

  renderNotice() {
    this.reportService.getReports().subscribe((data) => {
      console.log(data);
      this.notices = data;
    });
  }
  ngOnInit() {
  }
  hideComment(id) {
    const body = new HttpParams()
      .set('state', '0');
    this.commentsService.putComment(id, body.toString()).subscribe((res) => {
      console.log(res);
      alert(res['msg']);
    });
  }
}
