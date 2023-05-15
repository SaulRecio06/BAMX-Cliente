import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdministracionComponent } from './edit-administracion.component';

describe('EditAdministracionComponent', () => {
  let component: EditAdministracionComponent;
  let fixture: ComponentFixture<EditAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
