import { TestBed } from '@angular/core/testing';

import { ManageItemService } from './manage-item.service';

describe('ManageItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageItemService = TestBed.get(ManageItemService);
    expect(service).toBeTruthy();
  });
});
