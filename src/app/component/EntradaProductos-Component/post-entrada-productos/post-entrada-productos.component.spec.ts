import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEntradaProductosComponent } from './post-entrada-productos.component';

describe('PostEntradaProductosComponent', () => {
  let component: PostEntradaProductosComponent;
  let fixture: ComponentFixture<PostEntradaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEntradaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostEntradaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
