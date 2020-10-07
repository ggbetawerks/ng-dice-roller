import { Component, ViewChild } from '@angular/core';
import { DieType } from 'projects/ng-dice-roller/src/lib/die-type.enum';
import { NgDieComponent } from 'projects/ng-dice-roller/src/lib/ng-die.component';
import {
  NgDiceRollerComponent,
  NgDiceRollerService,
} from 'projects/ng-dice-roller/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-dice-roller-example';
  results: number[] = [];
  @ViewChild('roller') diceComponent: NgDiceRollerComponent;
  @ViewChild('die1') die1Component: NgDieComponent;
  @ViewChild('die2') die2Component: NgDieComponent;

  // diceArray = [DieType.D6, DieType.DPercentile, 7, 100];
  diceArray = [DieType.DPercentile, DieType.D10];
  constructor(private diceRoller: NgDiceRollerService) {}

  rollD6(): void {
    this.results.push(this.diceRoller.rollDice(DieType.D6, 1));
  }
  roll2D6(): void {
    this.results.push(this.diceRoller.rollDice(DieType.D6, 2));
  }

  rollD10(): void {
    this.results.push(this.diceRoller.rollDice(DieType.D10, 1));
  }

  rollD7(): void {
    this.results.push(this.diceRoller.roll(7, 1));
  }

  rollD37(): void {
    this.results.push(this.diceRoller.roll(37, 1));
  }

  doSomething(): void {
    // console.log(this.diceComponent);
    if (this.diceComponent) {
      this.diceComponent.roll();
    }
    if (this.die1Component) {
      this.die1Component.roll();
    }
    if (this.die2Component) {
      this.die2Component.roll();
    }
  }
}
