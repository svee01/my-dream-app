import { TestBed } from '@angular/core/testing';

import { ComponentUService } from './component-u.service';

describe('ComponentAService', () => {
  let service: ComponentUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});