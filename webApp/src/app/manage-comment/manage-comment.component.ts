import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../comments.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-manage-comment',
  templateUrl: './manage-comment.component.html',
  styleUrls: ['./manage-comment.component.css']
})
export class ManageCommentComponent implements OnInit {
  private comments;
  constructor(
    private commentsService: CommentsService
  ) {
    this.renderComments();
  }

  renderComments() {
    this.commentsService.getComment().subscribe((data) => {
      console.log(data);
      this.comments = data;
    });
  }
  recoverComment(id) {
    const body = new HttpParams()
      .set('state', '1');
    this.commentsService.putComment(id, body.toString()).subscribe((res) => {
      console.log(res);
      this.renderComments();
    });
  }
  ngOnInit() {
  }

}
