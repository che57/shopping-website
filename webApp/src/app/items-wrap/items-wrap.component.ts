import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { HttpClient } from '@angular/common/http';
import {ManageItemService} from '../manage-item.service';

@Component({
  selector: 'app-items-wrap',
  templateUrl: './items-wrap.component.html',
  styleUrls: ['./items-wrap.component.css'],
  providers: [ItemsService, HttpClient]
})
export class ItemsWrapComponent implements OnInit {
  private items;
  private itemAmount;
  private nPerPage;
  constructor(
    private itemsService: ItemsService,
    private manageItemService: ManageItemService
  ) {
    this.showItems(0);
    this.showPagination();
  }
  showPagination() {
    this.itemsService.getItemsAmount().subscribe((data) => {
      this.itemAmount = data['amount'];
      this.nPerPage = data['nPerPage'];
    });
  }
  showItems(num) {
    this.itemsService.getItems(num).subscribe((data) => {
      this.items = data;
    });
  }
  ngOnInit() {
  }
  loopArray() {
    const pages = this.itemAmount % this.nPerPage;
    let array: number[] = [];
    for (let i = 1; i <= pages; i++) {
      array.push(i);
    }
    return array;
  }
  authDisplay() {
    return (localStorage.getItem('auth') === 'true');
  }
  adminDisplay() {
    return (localStorage.getItem('admin') === 'true');
  }
  removeItem(id) {
    this.manageItemService.deleteItem(id).subscribe((res) => {
      alert(res['msg']);
      this.showItems(0);
      this.showPagination();
    });
  }
}
