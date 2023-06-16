import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalidasProductosComponent } from './edit-salidas-productos.component';

describe('EditSalidasProductosComponent', () => {
  let component: EditSalidasProductosComponent;
  let fixture: ComponentFixture<EditSalidasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalidasProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSalidasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
