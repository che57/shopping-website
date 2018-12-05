import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items-wrap/items.service';
import {ActivatedRoute} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {CommentsService} from '../comments.service';
import {CartService} from '../cart.service';
import {CollectionService} from '../collection.service';

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
  constructor(
    private itemsService: ItemsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private collectionService: CollectionService
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
      console.log(data);
    });
  }
  getCollectionList() {
    if (localStorage.getItem('auth') === 'true') {
      this.collectionService.getMyCollection().subscribe((data) => {
        console.log(data);
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
  ngOnInit() {
  }

}
