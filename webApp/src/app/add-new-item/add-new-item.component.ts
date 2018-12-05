import { Component, OnInit } from '@angular/core';
import {ManageItemService} from '../manage-item.service';
import {HttpParams} from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  constructor(
    private manageItemService: ManageItemService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  addNewItem(name, description, price, tax, stock) {
    const body = new HttpParams()
      .set('name', name)
      .set('iDescription', description)
      .set('price', price)
      .set('tax', (tax / 100).toString())
      .set('stock', stock);
    this.manageItemService.postItem(body.toString()).subscribe((res) => {
      alert(res['message']);
      this.location.back();
    });
  }
}
