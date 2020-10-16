import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgDiceRollerComponent } from './ng-dice-roller.component';
import { NgDieComponent } from './ng-die.component';

@NgModule({
  declarations: [NgDiceRollerComponent, NgDieComponent],
  imports: [CommonModule],
  exports: [NgDiceRollerComponent, NgDieComponent],
})
export class NgDiceRollerModule {}
