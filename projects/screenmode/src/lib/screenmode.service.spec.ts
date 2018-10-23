import { TestBed } from '@angular/core/testing';

import { ScreenmodeService } from './screenmode.service';

describe('ScreenmodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenmodeService = TestBed.get(ScreenmodeService);
    expect(service).toBeTruthy();
  });
});
