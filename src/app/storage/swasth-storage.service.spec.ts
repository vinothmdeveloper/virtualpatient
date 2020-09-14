import { TestBed } from '@angular/core/testing';

import { SwasthStorageService } from './swasth-storage.service';

describe('SwasthStorageService', () => {
  let service: SwasthStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwasthStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
