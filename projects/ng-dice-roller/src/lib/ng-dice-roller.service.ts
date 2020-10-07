import { Injectable } from '@angular/core';
import { DieType } from './die-type.enum';

@Injectable({
  providedIn: 'root',
})
export class NgDiceRollerService {
  constructor() {}

  /**
   * Helper for D6 dice, that just just takes the number of D6 to roll
   * @param numDice the number of D6
   */
  public rollD6(numDice: number): number {
    return this.rollDice(DieType.D6, numDice);
  }

  /**
   * Roll the specified number of die type dice, returning the total
   * @param dieType The type of die to roll
   * @param numDice The number of dice to roll
   */
  public rollDice(dieType: DieType, numDice: number): number {
    return this.roll(DieType[DieType[dieType]], numDice);
  }

  /**
   * Roll a die of the specified number of sides, and the specified number of dice, returning the total
   * @param numSides Number of sides on the die
   * @param numDice Number of dice to roll
   */
  public roll(numSides: number, numDice: number): number {
    let retVal = 0;
    if (numSides < 1) {
      for (let i = 0; i < numDice; i++) {
        retVal += this.rand0(10) * 10;
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
  private rand(n: number): number {
    return Math.floor(Math.random() * n) + 1;
  }

  /**
   * Returns a random number from 0 - (n-1)
   * @param n maximum integer
   */
  private rand0(n: number): number {
    return Math.floor(Math.random() * n);
  }
}
