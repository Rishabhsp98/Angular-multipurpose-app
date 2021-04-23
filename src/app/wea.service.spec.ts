import { TestBed } from '@angular/core/testing';

import { WeaService } from './wea.service';

describe('WeaService', () => {
  let service: WeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
