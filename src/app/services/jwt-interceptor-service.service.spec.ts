import { TestBed } from '@angular/core/testing';

import { JwtInterceptorServiceService } from './jwt-interceptor-service.service';

describe('JwtInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtInterceptorServiceService = TestBed.get(JwtInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
