import { TestBed } from '@angular/core/testing';

import { TeacherdashService } from './teacherdash.service';

describe('TeacherdashService', () => {
  let service: TeacherdashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherdashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
