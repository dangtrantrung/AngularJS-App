/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroCacheService } from './hero-cache.service';

describe('HeroCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroCacheService]
    });
  });

  it('should ...', inject([HeroCacheService], (service: HeroCacheService) => {
    expect(service).toBeTruthy();
  }));
});
