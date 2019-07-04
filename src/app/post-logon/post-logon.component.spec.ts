import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLogonComponent } from './post-logon.component';

describe('PostLogonComponent', () => {
  let component: PostLogonComponent;
  let fixture: ComponentFixture<PostLogonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLogonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
