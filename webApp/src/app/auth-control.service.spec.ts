import { TestBed } from '@angular/core/testing';

import { AuthControlService } from './auth-control.service';

describe('AuthControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthControlService = TestBed.get(AuthControlService);
    expect(service).toBeTruthy();
  });
});
