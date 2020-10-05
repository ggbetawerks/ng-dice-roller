# NgDiceRoller
An Angular library for doing dice rolls.

To install:
`npm install @ggbetawerks/ng-dice-roller`

To use add the NgDiceRollerService to the Providers of your module, and then to use:
```typescript
import { NgDiceRollerService } from '@ggbetawerks/ng-dice-roller';
...
constructor(private roller: NgDiceRollerService){

}

doSomething(){
  console.log('The result of rolling 2D6')
  console.log(this.roller.rollDice(DieType.D6, 2));
}

```
