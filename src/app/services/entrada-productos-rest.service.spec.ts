import { TestBed } from '@angular/core/testing';

import { EntradaProductosRestService } from './entrada-productos-rest.service';

describe('EntradaProductosRestService', () => {
  let service: EntradaProductosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradaProductosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
