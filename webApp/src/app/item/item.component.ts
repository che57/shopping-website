import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items-wrap/items.service';
import {ActivatedRoute} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {CommentsService} from '../comments.service';
import {CartService} from '../cart.service';
import {CollectionService} from '../collection.service';
import {ManageItemService} from '../manage-item.service';
import {ReportService} from '../report.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: []
})
export class ItemComponent implements OnInit {
  private item;
  private comments;
  private itemId;
  private rate;
  private collectionList;
  private itemName;
  public reportOn = false;
  // these vars hold values for report.
  private n;
  private cId;
  private cC;
  // ---------------------------------
  constructor(
    private itemsService: ItemsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private collectionService: CollectionService,
    private manageItemService: ManageItemService,
    private reportService: ReportService
  ) {
    this.loadItemInfo();
    this.loadItemComments();
    this.getCollectionList();
  }

  ratingChange(rating) {
    this.rate = rating;
  }
  loadItemInfo() {
    this.route.params.subscribe((params) => {
      this.itemsService.getItem(params['id']).subscribe((data) => {
        this.itemName = data['name'];
        this.item = data;
      });
    });
  }
  loadItemComments() {
    this.route.params.subscribe((params) => {
      this.itemId = params['id'];
      this.itemsService.getItemComments(params['id']).subscribe((data) => {
        this.comments = data;
      });
    });
  }
  authDisplay() {
    return (localStorage.getItem('auth') === 'true');
  }
  adminDisplay() {
    return (localStorage.getItem('admin') === 'true');
  }
  writeComment(rating: string, content: string) {
    const body = new HttpParams()
      .set('userName', localStorage.getItem('userName'))
      .set('content', content)
      .set('rating', rating)
      .set('itemId', this.itemId);
    this.commentService.postComment(body.toString())
      .subscribe((data) => {
        console.log(data);
        this.loadItemComments();
      });
  }
  addToCart(amount) {
    if (amount <= 0) {
      alert('Invalid Input');
      return;
    } else if (amount > this.item['stock']) {
      alert('No Enough Stock!');
      return;
    }
    const body = new HttpParams()
      .set('itemId', this.itemId)
      .set('itemQuantity', amount);
    this.cartService.addToCart(body.toString()).subscribe((data) => {
      this.loadItemInfo();
    });
  }
  getCollectionList() {
    if (localStorage.getItem('auth') === 'true') {
      this.collectionService.getMyCollection().subscribe((data) => {
        this.collectionList = data;
      });
    }
  }
  addToCollection(collectionId, amount) {
    if (collectionId === '-1') {
      alert('Please select a collection to continue!');
      return;
    }
    const body = new HttpParams()
      .set('itemId', this.itemId)
      .set('collectionId', collectionId)
      .set('quantity', amount)
      .set('itemName', this.itemName);
    this.collectionService.postCollectionItem(body.toString()).subscribe((res) => {
      console.log(res);
      alert(res['msg']);
    });
  }
  updateItemInfo(name, description, stock, price, tax) {
    const body = new HttpParams()
      .set('name', name)
      .set('iDescription', description)
      .set('price', price)
      .set('stock', stock)
      .set('tax', tax / 100);
    this.manageItemService.putItem(this.itemId, body.toString()).subscribe((res) => {
      alert(res['msg']);
      this.loadItemInfo();
    });
  }
  ngOnInit() {
  }
  updateCommentState(id) {
    const body = new HttpParams()
      .set('state', '0');
    this.commentService.putComment(id, body.toString()).subscribe((res) => {
      console.log(res);
      this.loadItemComments();
    });
  }
  reportClick(n, cId, cC) {
    this.reportOn = true;
    this.n = n;
    this.cId = cId;
    this.cC = cC;
  }
  reportComment(s, c) {
    let now = new Date();
    const body = new HttpParams()
      .set('date', now.toString())
      .set('subject', s)
      .set('userName', this.n)
      .set('commentId', this.cId)
      .set('commentContent', this.cC)
      .set('content', c);
    console.log(body.toString());
    this.reportService.postReport(body.toString()).subscribe((res) => {
      console.log(res);
      alert(res['msg']);
    });
  }
}
