import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items-wrap/items.service';
import {ActivatedRoute} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {AuthControlService} from '../auth-control.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [AuthControlService]
})
export class ItemComponent implements OnInit {
  private item;
  private comments;
  private itemId;
  private rate;
  constructor(
    private itemsService: ItemsService,
    private authControlService: AuthControlService,
    private route: ActivatedRoute
  ) {
    this.loadItemInfo();
    this.loadItemComments();
  }

  ratingChange(rating) {
    this.rate = rating;
  }
  loadItemInfo() {
    this.route.params.subscribe((params) => {
      this.itemsService.getItem(params['id']).subscribe((data) => {
        this.item = data;
      });
    });
  }
  loadItemComments() {
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
      this.itemsService.getItemComments(params['id']).subscribe((data) => {
        console.log(data);
        this.comments = data;
      });
    });
  }
  authDisplay() {
    return (localStorage.getItem('auth') === 'true');
  }
  writeComment(rating: string, content: string) {
    const body = new HttpParams()
      .set('userName', localStorage.getItem('userName'))
      .set('content', content)
      .set('rating', rating)
      .set('itemId', this.itemId);
    this.authControlService.postComment(body.toString()).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
