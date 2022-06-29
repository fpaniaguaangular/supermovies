import { TestBed } from '@angular/core/testing';

import { HttpTestHeadersInterceptor } from './http-test-headers.interceptor';

describe('HttpTestHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpTestHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpTestHeadersInterceptor = TestBed.inject(HttpTestHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
