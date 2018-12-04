import { Component, OnInit } from '@angular/core';
import {CollectionService} from '../collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  private collections;
  constructor(
    private collectionService: CollectionService
  ) {
    this.renderCollections();
  }
  renderCollections() {
    this.collectionService.getPublicCollection().subscribe((data) => {
      console.log(data);
      this.collections = data;
    });
  }
  ngOnInit() {
  }

}
