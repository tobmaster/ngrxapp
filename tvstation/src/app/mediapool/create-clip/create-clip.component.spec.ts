import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClipComponent } from './create-clip.component';

describe('CreateClipComponent', () => {
  let component: CreateClipComponent;
  let fixture: ComponentFixture<CreateClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
