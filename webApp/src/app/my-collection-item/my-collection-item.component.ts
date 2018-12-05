import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CollectionService} from '../collection.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-my-collection-item',
  templateUrl: './my-collection-item.component.html',
  styleUrls: ['./my-collection-item.component.css']
})
export class MyCollectionItemComponent implements OnInit {
  private cItems;
  private cInfo;
  constructor(
    private route: ActivatedRoute,
    private collectionService: CollectionService
  ) {
    this.renderCollectionItems();
    this.renderCollectionInfo();
  }

  ngOnInit() {
  }
  renderCollectionItems() {
    this.route.params.subscribe((params) => {
      this.collectionService.getCollectionItems(params['id']).subscribe((data) => {
        this.cItems = data;
        console.log(data);
      });
    });
  }
  renderCollectionInfo() {
    this.route.params.subscribe((params) => {
      this.collectionService.getCollectionInfo(params['id']).subscribe((data) => {
        this.cInfo = data;
        console.log(data);
      });
    });
  }
  saveCollectionInfoChanges(cName, cDescription, ck) {
    let visibility = 0;
    if (ck) {
      visibility = 0;
    } else {
      visibility = 1;
    }
    const body = new HttpParams()
      .set('collectionName', cName)
      .set('collectionDescription', cDescription)
      .set('visibilityState', visibility.toString());
    this.collectionService.putCollectionInfo(this.cInfo['_id'], body.toString()).subscribe((res) => {
      alert(res['msg']);
    });
  }
  saveCollectionItemChanges(cTId, quantity) {
    if (quantity < 0) {
      return alert('Quantity cannot be negative!');
    }
    const body = new HttpParams()
      .set('quantity', quantity);
    this.collectionService.putCollectionItem(cTId, body.toString()).subscribe((res) => {
      alert(res['msg']);
      console.log(res);
    });
  }
  removeCollectionItem(cTId) {
    this.collectionService.deleteCollectionItem(cTId).subscribe((res) => {
      this.renderCollectionItems();
    });
  }
}
