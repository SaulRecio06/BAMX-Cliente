import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSalidasProductosComponent } from './delete-salidas-productos.component';

describe('DeleteSalidasProductosComponent', () => {
  let component: DeleteSalidasProductosComponent;
  let fixture: ComponentFixture<DeleteSalidasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSalidasProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSalidasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
