import { TestBed } from '@angular/core/testing';

import { EmpleadoRestService } from './empleado-rest.service';

describe('EmpleadoRestService', () => {
  let service: EmpleadoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
