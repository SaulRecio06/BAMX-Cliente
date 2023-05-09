import { TestBed } from '@angular/core/testing';

import { ContenedorRestService } from './contenedor-rest.service';

describe('ContenedorRestService', () => {
  let service: ContenedorRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenedorRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
