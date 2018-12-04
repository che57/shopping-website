import { Component, OnInit } from '@angular/core';
import {CollectionService} from '../collection.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent implements OnInit {
  private collections;
  constructor(
    private collectionService: CollectionService

  ) {
    this.renderMyCollections();
  }

  ngOnInit() {
  }
  renderMyCollections() {
    this.collectionService.getMyCollection().subscribe((data) => {
      console.log(data);
      this.collections = data;
    });
  }
}
