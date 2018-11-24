import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/images/NoImageFound.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Item1</h5>
        <p class="card-text price">Price: $100</p>
        <p class="card-text tax">Tax: 13%</p>
        <p class="card-text quantity">Quantity: 100</p>
        <button class="btn btn-primary">Add</button>
      </div>
    </div>
  `
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
