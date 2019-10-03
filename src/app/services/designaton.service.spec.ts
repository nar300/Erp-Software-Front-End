import { TestBed } from '@angular/core/testing';

import { DesignatonService } from './designaton.service';

describe('DesignatonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignatonService = TestBed.get(DesignatonService);
    expect(service).toBeTruthy();
  });
});
