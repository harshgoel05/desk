import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentwindowComponent } from './studentwindow.component';

describe('StudentwindowComponent', () => {
  let component: StudentwindowComponent;
  let fixture: ComponentFixture<StudentwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
