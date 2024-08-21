import { TestBed } from '@angular/core/testing';

import { StringingServiceService } from './stringing-service.service';

describe('StringingServiceService', () => {
  let service: StringingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
