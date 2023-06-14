import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSalidasProductosComponent } from './post-salidas-productos.component';

describe('PostSalidasProductosComponent', () => {
  let component: PostSalidasProductosComponent;
  let fixture: ComponentFixture<PostSalidasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSalidasProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSalidasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
