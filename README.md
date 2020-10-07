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

doSomething(){
  console.log('The result of rolling 2D6')
  // Using the Enumeration of Dice Types
  console.log(this.roller.rollDice(DieType.D6, 2));
  console.log(this.roller.rollDice(DieType.DPercentile, 1));

  // Just specifying the number of sides on a die, so you can do uncommon dice
  console.log(this.roller.roll(7, 2)); //Rolling 2D7
}

```

## Component
A dice component, that will display the results of the rolls.

To use add the NgDiceRollerModule to the Imports section of your module

```html
<gg-dice-roller [diceArray]="[6, 7, DieType.DPercentile, DieType.D10]"></gg-dice-roller>
```
