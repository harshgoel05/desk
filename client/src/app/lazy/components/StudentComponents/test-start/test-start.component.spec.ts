import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStartComponent } from './test-start.component';

describe('TestStartComponent', () => {
  let component: TestStartComponent;
  let fixture: ComponentFixture<TestStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
