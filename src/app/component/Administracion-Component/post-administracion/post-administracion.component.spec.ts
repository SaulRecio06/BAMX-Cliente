import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdministracionComponent } from './post-administracion.component';

describe('PostAdministracionComponent', () => {
  let component: PostAdministracionComponent;
  let fixture: ComponentFixture<PostAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdministracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
