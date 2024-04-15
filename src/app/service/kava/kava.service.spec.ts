import { TestBed } from '@angular/core/testing';

import { KavaService } from './kava.service';

describe('KavaService', () => {
  let service: KavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
