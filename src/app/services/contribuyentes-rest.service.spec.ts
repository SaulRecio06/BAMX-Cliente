import { TestBed } from '@angular/core/testing';

import { ContribuyentesRestService } from './contribuyentes-rest.service';

describe('ContribuyentesRestService', () => {
  let service: ContribuyentesRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContribuyentesRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
