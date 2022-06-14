import { TestBed } from '@angular/core/testing';

import { SiceService } from './sice.service';

describe('SiceService', () => {
  let service: SiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
