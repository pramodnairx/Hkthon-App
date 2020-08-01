import { TestBed } from '@angular/core/testing';

import { BMIServiceService } from './bmiservice.service';

describe('BMIServiceService', () => {
  let service: BMIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BMIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
