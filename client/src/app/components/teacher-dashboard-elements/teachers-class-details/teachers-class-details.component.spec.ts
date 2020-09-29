import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersClassDetailsComponent } from './teachers-class-details.component';

describe('TeachersClassDetailsComponent', () => {
  let component: TeachersClassDetailsComponent;
  let fixture: ComponentFixture<TeachersClassDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersClassDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
