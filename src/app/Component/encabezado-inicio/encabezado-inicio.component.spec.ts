import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoInicioComponent } from './encabezado-inicio.component';

describe('EncabezadoInicioComponent', () => {
  let component: EncabezadoInicioComponent;
  let fixture: ComponentFixture<EncabezadoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
