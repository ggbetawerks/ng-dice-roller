# NgDiceRoller
An Angular library for doing dice rolls.

To install:
`npm install @ggbetawerks/ng-dice-roller`

There are two main pieces of this library.  

## Service
A dice roller service, that implements methods of generating random numbers based on the type of die (number of sides), and the number of dice.

To use add the NgDiceRollerService to the Providers of your module, and then to use:
```typescript
import { NgDiceRollerService } from '@ggbetawerks/ng-dice-roller';
...
constructor(private roller: NgDiceRollerService){

}

rollDice(){
  // Using the Enumeration of Dice Types
  console.log(this.roller.rollDice(DieType.D6, 2));
  console.log(this.roller.rollDice(DieType.DPercentile, 1));

  // Just specifying the number of sides on a die, so you can do uncommon dice
  console.log(this.roller.roll(7, 2)); //Rolling 2D7
}

```

## Components
A pair of components that show the results of die rolls.

To use add the NgDiceRollerModule to the Imports section of your module

### Dice Roller
A way to include a collection of dice that will be rolled together and display their results. 
```html
  <gg-dice-roller
  [showTotal]="false"
  [diceArray]="[
    { sides: 6 },
    { sides: 7 },
    { sides: DieType.DPercentile },
    { sides: DieType.D10 },
    { values: ['heads', 'tails'] },
    {
      values: ['../assets/Alea_3.png', '../assets/Alea_6.png'],
      useImages: true
    }
  ]"
></gg-dice-roller>
```

### Single Die
A way to display an individual die's results.
```html
<gg-die [sides]="DieType.D6"></gg-die>
<gg-die
  [useImages]="true"
  [values]="['../assets/Alea_3.png', '../assets/Alea_6.png']"
></gg-die>
<gg-die [values]="['heads', 'tails']"></gg-die>
```
