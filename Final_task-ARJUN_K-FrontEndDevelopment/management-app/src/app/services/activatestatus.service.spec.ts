import { TestBed } from '@angular/core/testing';

import { ActivatestatusService } from './activatestatus.service';

describe('ActivatestatusService', () => {
  let service: ActivatestatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatestatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
