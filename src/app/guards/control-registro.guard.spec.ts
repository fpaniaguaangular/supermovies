import { TestBed } from '@angular/core/testing';

import { ControlRegistroGuard } from './control-registro.guard';

describe('ControlRegistroGuard', () => {
  let guard: ControlRegistroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlRegistroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
