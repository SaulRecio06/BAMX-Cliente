import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlmacenComponent } from './delete-almacen.component';

describe('DeleteAlmacenComponent', () => {
  let component: DeleteAlmacenComponent;
  let fixture: ComponentFixture<DeleteAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAlmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
