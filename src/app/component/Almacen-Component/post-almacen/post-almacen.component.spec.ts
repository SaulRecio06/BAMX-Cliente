import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAlmacenComponent } from './post-almacen.component';

describe('PostAlmacenComponent', () => {
  let component: PostAlmacenComponent;
  let fixture: ComponentFixture<PostAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAlmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
