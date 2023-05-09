import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraInicioComponent } from './barra-inicio.component';

describe('BarraInicioComponent', () => {
  let component: BarraInicioComponent;
  let fixture: ComponentFixture<BarraInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
