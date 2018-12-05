import { TestBed } from '@angular/core/testing';

import { UrlCollectionService } from './url-collection.service';

describe('UrlCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlCollectionService = TestBed.get(UrlCollectionService);
    expect(service).toBeTruthy();
  });
});
