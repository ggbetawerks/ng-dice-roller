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
  labels1: string[] = ['one', 'two', 'three', 'four', 'five', 'six'];
  labels2: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Dragon Fruit',
    'Elderberry',
    'Fig',
    'Grapefruit',
    'Honeydew Melon',
  ];
  images: string[] = [
    '../assets/Alea_1.png',
    '../assets/Alea_2.png',
    '../assets/Alea_3.png',
    '../assets/Alea_4.png',
    '../assets/Alea_5.png',
    '../assets/Alea_6.png',
  ];
  @ViewChild('roller') diceComponent: NgDiceRollerComponent;
  @ViewChild('roller2') diceComponent2: NgDiceRollerComponent;
  @ViewChild('die1') die1Component: NgDieComponent;
  @ViewChild('die2') die2Component: NgDieComponent;
  @ViewChild('die3') die3Component: NgDieComponent;
  @ViewChild('die4') die4Component: NgDieComponent;

  // diceArray = [DieType.D6, DieType.DPercentile, 7, 100];
  diceArray = [DieType.DPercentile, DieType.D10];

  diceArray2 = [DieType.D6, DieType.D6];

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

    if (this.diceComponent2) {
      this.diceComponent2.roll();
    }

    if (this.die1Component) {
      this.die1Component.roll();
    }
    if (this.die2Component) {
      this.die2Component.roll();
    }

    if (this.die3Component) {
      this.die3Component.roll();
    }

    if (this.die4Component) {
      this.die4Component.roll();
    }
  }
}
