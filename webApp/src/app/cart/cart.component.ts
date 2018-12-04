import { Component, OnInit } from '@angular/core';
import {AuthControlService} from '../auth-control.service';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../items-wrap/items.service';
import {HttpParams} from '@angular/common/http';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems;
  private totalPrice;
  public checkOutOn;
  public cleanCartOn;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private itemsService: ItemsService,
  ) {
    this.loadCartItems();
  }

  ngOnInit() {
    this.checkOutOn = false;
    this.cleanCartOn = false;
  }

  loadCartItems() {
    this.totalPrice = 0;
    this.cartItems = new Array();
    this.cartService.getCartItems().subscribe((data) => {
      // console.log(typeof data, data);
      for (let cItem of data) {
        this.itemsService.getItem(cItem.itemId).subscribe((res) => {
          this.cartItems.push({itemQuantity: cItem.itemQuantity , itemInfo: res, cItemId: cItem._id});
          this.totalPrice += cItem.itemQuantity * res['price'];
        });
        // console.log(cItem);
      }
    });
  }
  checkEmpty() {
    return (this.cartItems.length === 0);
  }
  checkOut() {
    this.cartService.checkOutCart().subscribe((res) => {
      console.log(res);
      this.loadCartItems();
    });
    this.checkOutOn = false;
  }
  cleanCart() {
    for (let i of this.cartItems) {
      this.deleteItem(i.cItemId);
    }
    this.cleanCartOn = false;
  }
  deleteItem(id) {
    this.cartService.deleteCartItem(id).subscribe((res) => {
      console.log(res);
      this.loadCartItems();
    });
  }
  addItem(stock, itemId) {
    if (stock === 0) {
      alert('No Enough Stock!');
      return;
    }
    const body = new HttpParams()
      .set('itemId', itemId)
      .set('itemQuantity', '1');
    this.cartService.addToCart(body.toString()).subscribe((data) => {
      this.loadCartItems();
      console.log(data);
    });
  }
  minItem(amount, cId, itemId) {
    if (amount === 1) {
      this.deleteItem(cId);
      return;
    }
    const body = new HttpParams()
      .set('itemId', itemId)
      .set('itemQuantity', '-1');
    this.cartService.addToCart(body.toString()).subscribe((data) => {
      this.loadCartItems();
      console.log(data);
    });
  }
}
