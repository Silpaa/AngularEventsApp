/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteActivatorService } from './route-activator.service';

describe('RouteActivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteActivatorService]
    });
  });

  it('should ...', inject([RouteActivatorService], (service: RouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
