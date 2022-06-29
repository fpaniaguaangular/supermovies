import { TestBed } from '@angular/core/testing';

import { ActivadorInterceptorService } from './activador-interceptor.service';

describe('ActivadorInterceptorService', () => {
  let service: ActivadorInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivadorInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
