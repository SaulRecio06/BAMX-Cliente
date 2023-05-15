import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEntradaProductosComponent } from './delete-entrada-productos.component';

describe('DeleteEntradaProductosComponent', () => {
  let component: DeleteEntradaProductosComponent;
  let fixture: ComponentFixture<DeleteEntradaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEntradaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEntradaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
