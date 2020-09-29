import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersArenaComponent } from './teachers-arena.component';

describe('TeachersArenaComponent', () => {
  let component: TeachersArenaComponent;
  let fixture: ComponentFixture<TeachersArenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersArenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
