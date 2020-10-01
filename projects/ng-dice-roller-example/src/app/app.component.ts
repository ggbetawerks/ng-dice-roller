import { Component } from '@angular/core';
import { DieType } from 'projects/ng-dice-roller/src/lib/die-type.enum';
import { NgDiceRollerService } from 'projects/ng-dice-roller/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-dice-roller-example';
  results: number[] = [];
  constructor(private diceRoller: NgDiceRollerService) {}

  rollD6(): void {
    this.results.push(this.diceRoller.rollDice(DieType.D6, 1));
  }

  rollD10(): void {
    this.results.push(this.diceRoller.rollDice(DieType.D10, 1));
  }

  rollD7(): void {
    this.results.push(this.diceRoller.roll(7, 1));
  }
}
