import { TestBed } from '@angular/core/testing';

import { ExportpdfService } from './exportpdf.service';

describe('ExportpdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportpdfService = TestBed.get(ExportpdfService);
    expect(service).toBeTruthy();
  });
});
