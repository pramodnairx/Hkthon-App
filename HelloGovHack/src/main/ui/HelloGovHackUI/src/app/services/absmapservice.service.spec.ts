import { TestBed } from '@angular/core/testing';

import { AbsmapserviceService } from './absmapservice.service';

describe('AbsmapserviceService', () => {
  let service: AbsmapserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsmapserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
