import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntradaProductosComponent } from './edit-entrada-productos.component';

describe('EditEntradaProductosComponent', () => {
  let component: EditEntradaProductosComponent;
  let fixture: ComponentFixture<EditEntradaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEntradaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEntradaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
