/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokerService } from './poker.service';

describe('PokerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokerService]
    });
  });

  it('should ...', inject([PokerService], (service: PokerService) => {
    expect(service).toBeTruthy();
  }));
});
