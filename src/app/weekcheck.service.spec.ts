import { TestBed } from '@angular/core/testing';

import { WeekcheckService } from './weekcheck.service';

describe('WeekcheckService', () => {
  let service: WeekcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
