import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollectionItemComponent } from './my-collection-item.component';

describe('MyCollectionItemComponent', () => {
  let component: MyCollectionItemComponent;
  let fixture: ComponentFixture<MyCollectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCollectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
