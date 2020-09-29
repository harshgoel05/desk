import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherResponsesComponent } from './teacher-responses.component';

describe('TeacherResponsesComponent', () => {
  let component: TeacherResponsesComponent;
  let fixture: ComponentFixture<TeacherResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
