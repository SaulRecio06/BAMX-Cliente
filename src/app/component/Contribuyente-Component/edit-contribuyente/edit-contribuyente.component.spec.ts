import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContribuyenteComponent } from './edit-contribuyente.component';

describe('EditContribuyenteComponent', () => {
  let component: EditContribuyenteComponent;
  let fixture: ComponentFixture<EditContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
