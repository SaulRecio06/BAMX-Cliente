import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaTablaComponent } from './entrada-tabla.component';

describe('EntradaTablaComponent', () => {
  let component: EntradaTablaComponent;
  let fixture: ComponentFixture<EntradaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
