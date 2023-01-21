import { TestBed } from '@angular/core/testing';

import { HistorialVersionService } from './historial-version.service';

describe('VersionService', () => {
  let service: HistorialVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
