import { Injectable } from '@angular/core';
import { DieType } from './die-type.enum';

@Injectable({
  providedIn: 'root',
})
export class NgDiceRollerService {
  constructor() {}

  public rollD6(numDice: number): number {
    return this.rollDice(DieType.D6, numDice);
  }
  public rollDice(dieType: DieType, numDice: number): number {
    return this.roll(DieType[DieType[dieType]], numDice);
  }

  public roll(numSides: number, numDice: number): number {
    let retVal = 0;
    if (numSides < 1) {
      for (let i = 0; i < numDice; i++) {
        retVal += this.rand(10) * 10;
      }
    } else {
      for (let i = 0; i < numDice; i++) {
        retVal += this.rand(numSides);
      }
    }
    return retVal;
  }

  /**
   * Returns a random number from 1 - n
   * @param n Maximum integer
   */
  public rand(n: number): number {
    return Math.floor(Math.random() * n) + 1;
  }

  /**
   * Returns a random number from 0 - (n-1)
   * @param n maximum integer
   */
  public rand0(n: number): number {
    return Math.floor(Math.random() * n);
  }
}
