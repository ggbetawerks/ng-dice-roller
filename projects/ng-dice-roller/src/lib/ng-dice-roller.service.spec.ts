import { TestBed } from '@angular/core/testing';
import { DieType } from './die-type.enum';

import { NgDiceRollerService } from './ng-dice-roller.service';

describe('NgDiceRollerService', () => {
  let service: NgDiceRollerService;
  const numRolls = 100;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDiceRollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('D6', () => {
    it('should give a number between 1-6', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollDice(DieType.D6, 1);
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(6);
      }
    });

    it('should give a number between 2-12', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollDice(DieType.D6, 2);
        expect(roll).toBeGreaterThanOrEqual(2);
        expect(roll).toBeLessThanOrEqual(12);
      }
    });
  });

  describe('rollD6', () => {
    it('should give a number between 1-6', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollD6(1);
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(6);
      }
    });

    it('should give a number between 2-12', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollD6(2);
        expect(roll).toBeGreaterThanOrEqual(2);
        expect(roll).toBeLessThanOrEqual(12);
      }
    });
  });

  describe('D20', () => {
    it('should give a number between 1-20', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollDice(DieType.D20, 1);
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(20);
      }
    });

    it('should give a number between 2-40', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollDice(DieType.D20, 2);
        expect(roll).toBeGreaterThanOrEqual(2);
        expect(roll).toBeLessThanOrEqual(40);
      }
    });
  });

  describe('DPercentile', () => {
    it('should give a number between 0-90', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollDice(DieType.DPercentile, 1);
        expect(roll).toBeGreaterThanOrEqual(0);
        expect(roll).toBeLessThanOrEqual(90);
      }
    });

    it('should give a number that is divisible by 10', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.rollDice(DieType.DPercentile, 1);
        expect(roll % 10).toBe(0);
      }
    });
  });

  describe('D7', () => {
    it('should give a number between 1-7', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.roll(7, 1);
        expect(roll).toBeGreaterThanOrEqual(1);
        expect(roll).toBeLessThanOrEqual(7);
      }
    });

    it('should give a number between 2-14', () => {
      let roll = 0;
      for (let i = 0; i < numRolls; i++) {
        roll = service.roll(7, 2);
        expect(roll).toBeGreaterThanOrEqual(2);
        expect(roll).toBeLessThanOrEqual(14);
      }
    });
  });
});
