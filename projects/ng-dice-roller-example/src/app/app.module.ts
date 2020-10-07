import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDiceRollerModule } from '../../../ng-dice-roller/src/lib/ng-dice-roller.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgDiceRollerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
