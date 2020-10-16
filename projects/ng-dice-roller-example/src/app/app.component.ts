import { Component, ViewChild } from '@angular/core';
import { DieType } from 'projects/ng-dice-roller/src/lib/die-type.enum';
import { NgDieComponent } from 'projects/ng-dice-roller/src/lib/ng-die.component';
import {
  DieDefinition,
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
    'assets/Alea_1.png',
    'assets/Alea_2.png',
    'assets/Alea_3.png',
    'assets/Alea_4.png',
    'assets/Alea_5.png',
    'assets/Alea_6.png',
  ];

  @ViewChild('die1') die1Component: NgDieComponent;
  @ViewChild('die2') die2Component: NgDieComponent;
  @ViewChild('die3') die3Component: NgDieComponent;
  @ViewChild('die4') die4Component: NgDieComponent;

  // diceArray = [DieType.D6, DieType.DPercentile, 7, 100];
  diceArray: DieDefinition[] = [
    { sides: DieType.DPercentile },
    { sides: DieType.D10 },
  ];

  diceArray2: DieDefinition[] = [{ sides: DieType.D6 }, { sides: DieType.D6 }];

  diceArray3: DieDefinition[] = [
    { values: this.labels1 },
    { values: this.labels2 },
    { values: this.images, useImages: true },
  ];

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

  rollContainer(container: NgDiceRollerComponent): void {
    if (container) {
      container.roll();
    }
  }

  rollDie(die: NgDieComponent): void {
    if (die) {
      die.roll();
    }
  }
  rollSingles(): void {
    this.rollDie(this.die1Component);
    this.rollDie(this.die2Component);
    this.rollDie(this.die3Component);
    this.rollDie(this.die4Component);
  }
}
