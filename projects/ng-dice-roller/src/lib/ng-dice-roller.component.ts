import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { DieType } from './die-type.enum';
import { NgDiceRollerService } from './ng-dice-roller.service';
import { NgDieComponent } from './ng-die.component';

export interface DieDefinition {
  sides?: number | DieType;
  values?: string[];
  useImages?: boolean;
}
@Component({
  selector: 'gg-dice-roller',
  template: `
    <ng-container *ngFor="let item of diceArray">
      <gg-die
        [sides]="item.sides"
        [useImages]="item.useImages"
        [values]="item.values"
        (ggDieResult)="dieResultUpdated($event)"
      ></gg-die>
    </ng-container>
    <div *ngIf="showTotal">Total: {{ total }}</div>
  `,
  styles: [],
})
export class NgDiceRollerComponent implements OnInit {
  @Input() diceArray: DieDefinition[];
  @Input() showTotal = true;
  @ViewChildren(NgDieComponent) dieArray: NgDieComponent[];

  total = 0;

  constructor(private diceRoller: NgDiceRollerService) {}

  ngOnInit(): void {}

  public roll(): void {
    this.total = 0;
    this.dieArray.forEach((element) => {
      element.roll();
    });
  }

  dieResultUpdated(val: number): void {
    this.total += val;
  }

  public getTotal(): number {
    return this.total;
  }
}
