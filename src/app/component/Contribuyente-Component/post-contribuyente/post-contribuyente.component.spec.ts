import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContribuyenteComponent } from './post-contribuyente.component';

describe('PostContribuyenteComponent', () => {
  let component: PostContribuyenteComponent;
  let fixture: ComponentFixture<PostContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
