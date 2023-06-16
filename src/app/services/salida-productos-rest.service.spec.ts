import { TestBed } from '@angular/core/testing';

import { SalidaProductosRestService } from './salida-productos-rest.service';

describe('SalidaProductosRestService', () => {
  let service: SalidaProductosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalidaProductosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
