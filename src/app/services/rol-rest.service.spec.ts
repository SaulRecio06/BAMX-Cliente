import { TestBed } from '@angular/core/testing';

import { RolRestService } from './rol-rest.service';

describe('RolRestService', () => {
  let service: RolRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
