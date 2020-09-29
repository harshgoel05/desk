import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestDetailsComponent } from './student-test-details.component';

describe('StudentTestDetailsComponent', () => {
  let component: StudentTestDetailsComponent;
  let fixture: ComponentFixture<StudentTestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
