import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassPopComponent } from './add-class-pop.component';

describe('AddClassPopComponent', () => {
  let component: AddClassPopComponent;
  let fixture: ComponentFixture<AddClassPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassPopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
