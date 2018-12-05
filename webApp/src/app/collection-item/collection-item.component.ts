import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CollectionService} from '../collection.service';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css']
})
export class CollectionItemComponent implements OnInit {
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
}
