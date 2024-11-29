import { TestBed } from '@angular/core/testing';

import { FirehemmService } from './firehemm.service';

describe('FirehemmService', () => {
  let service: FirehemmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirehemmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
