import { TestBed } from '@angular/core/testing';

import { FinalesService } from './finales.service';

describe('FinalesService', () => {
  let service: FinalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
