import { TestBed } from '@angular/core/testing';

import { WidgetExampleService } from './widget-example.service';

describe('WidgetExampleService', () => {
  let service: WidgetExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
