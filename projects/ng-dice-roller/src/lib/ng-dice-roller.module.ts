import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DiceRenderEngineService } from './ng-dice-render-engine.service';
import { DiceRenderComponent } from './ng-dice-render.component';
import { NgDiceRollerComponent } from './ng-dice-roller.component';
import { NgDieComponent } from './ng-die.component';

@NgModule({
  declarations: [NgDiceRollerComponent, NgDieComponent, DiceRenderComponent],
  imports: [CommonModule],
  exports: [NgDiceRollerComponent, NgDieComponent, DiceRenderComponent],
  providers: [DiceRenderEngineService],
})
export class NgDiceRollerModule {}
