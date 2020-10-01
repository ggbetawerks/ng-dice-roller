import { TestBed } from '@angular/core/testing';

import { NgDiceRollerService } from './ng-dice-roller.service';

describe('NgDiceRollerService', () => {
  let service: NgDiceRollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDiceRollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
