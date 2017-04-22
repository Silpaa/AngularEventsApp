/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListResolverService } from './list-resolver.service';

describe('ListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListResolverService]
    });
  });

  it('should ...', inject([ListResolverService], (service: ListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
