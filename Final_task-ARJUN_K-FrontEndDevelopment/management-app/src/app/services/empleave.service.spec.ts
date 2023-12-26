import { TestBed } from '@angular/core/testing';

import { EmpleaveService } from './empleave.service';

describe('EmpleaveService', () => {
  let service: EmpleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
