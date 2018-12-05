import { Component, OnInit } from '@angular/core';
import {CollectionService} from '../collection.service';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {

  constructor(
    private collectionService: CollectionService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }
  createCollection(cName, cDescription, visibility) {
    let stateCode = 0;
    if (!visibility) {
      stateCode = 1;
    }
    const body = new HttpParams()
      .set('collectionName', cName)
      .set('collectionDescription', cDescription)
      .set('userName', localStorage.getItem('userName'))
      .set('visibilityState', stateCode.toString());
    this.collectionService.postCollection(body.toString()).subscribe((data) => {
      console.log(data);
      this.location.back();
    });
  }
}
