import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenTablaComponent } from './almacen-tabla.component';

describe('AlmacenTablaComponent', () => {
  let component: AlmacenTablaComponent;
  let fixture: ComponentFixture<AlmacenTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmacenTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
