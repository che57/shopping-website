import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsWrapComponent } from './items-wrap.component';

describe('ItemsWrapComponent', () => {
  let component: ItemsWrapComponent;
  let fixture: ComponentFixture<ItemsWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
