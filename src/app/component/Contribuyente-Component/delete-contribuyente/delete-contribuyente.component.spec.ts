import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContribuyenteComponent } from './delete-contribuyente.component';

describe('DeleteContribuyenteComponent', () => {
  let component: DeleteContribuyenteComponent;
  let fixture: ComponentFixture<DeleteContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
