import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { DieType } from './die-type.enum';
import { NgDiceRollerService } from './ng-dice-roller.service';
import { NgDieComponent } from './ng-die.component';

@Component({
  selector: 'gg-dice-roller',
  template: `
    <ng-container *ngFor="let item of diceArray">
      <gg-die [sides]="item" (ggDieResult)="dieResultUpdated($event)"></gg-die>
    </ng-container>
    <div>Total: {{ total }}</div>
  `,
  styles: [],
})
export class NgDiceRollerComponent implements OnInit {
  @Input() diceArray: (number | DieType)[];
  @ViewChildren(NgDieComponent) dieArray: NgDieComponent[];

  get total(): number {
    let t = 0;
    if (this.dieArray) {
      this.dieArray.forEach((element) => {
        t += element.getNumericResult();
      });
    }
    return t;
  }

  constructor(private diceRoller: NgDiceRollerService) {}

  ngOnInit(): void {}

  public roll(): void {
    // this.total = 0;
    this.dieArray.forEach((element) => {
      element.roll();
    });
  }

  dieResultUpdated(val: number): void {
    // this.total += val;
  }

  public getTotal(): number {
    return this.total;
  }
}
