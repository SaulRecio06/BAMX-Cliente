import { TestBed } from '@angular/core/testing';

import { AlmacenRestService } from './almacen-rest.service';

describe('AlmacenRestService', () => {
  let service: AlmacenRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
