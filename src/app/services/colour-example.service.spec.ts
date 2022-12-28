import { TestBed } from '@angular/core/testing';

import { ColourExampleService } from './colour-example.service';

describe('ColourExampleService', () => {
  let service: ColourExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColourExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
