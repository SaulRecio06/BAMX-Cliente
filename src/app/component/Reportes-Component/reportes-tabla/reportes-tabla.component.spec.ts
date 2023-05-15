import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesTablaComponent } from './reportes-tabla.component';

describe('ReportesTablaComponent', () => {
  let component: ReportesTablaComponent;
  let fixture: ComponentFixture<ReportesTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
