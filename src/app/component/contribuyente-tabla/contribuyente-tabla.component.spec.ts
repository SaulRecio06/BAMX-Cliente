import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuyenteTablaComponent } from './contribuyente-tabla.component';

describe('ContribuyenteTablaComponent', () => {
  let component: ContribuyenteTablaComponent;
  let fixture: ComponentFixture<ContribuyenteTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribuyenteTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribuyenteTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
