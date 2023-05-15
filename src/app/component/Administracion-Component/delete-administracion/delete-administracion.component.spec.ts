import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdministracionComponent } from './delete-administracion.component';

describe('DeleteAdministracionComponent', () => {
  let component: DeleteAdministracionComponent;
  let fixture: ComponentFixture<DeleteAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
