import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DieType } from './die-type.enum';
import { NgDiceRollerService } from './ng-dice-roller.service';

@Component({
  selector: 'gg-die',
  template: `
    <img *ngIf="useImages" [src]="rollResult" />
    <p *ngIf="!useImages">
      D{{ sides == DieType.DPercentile ? 'Percentile' : sides }} =
      {{ values?.length > 0 ? rollResult : rollNumericResult }}
    </p>
  `,
  styles: [],
})
export class NgDieComponent implements OnInit {
  @Input() sides: number | DieType = 6;
  @Input() values: string[] = [];
  @Input() useImages = false;
  @Output() public ggDieResult = new EventEmitter<number | string>();
  rollResult: number | string;
  rollNumericResult: number;
  DieType = DieType;
  constructor(private diceRoller: NgDiceRollerService) {}

  ngOnInit(): void {
    this.roll();
  }

  public roll(): void {
    if (this.values && this.values.length > 0) {
      this.sides = this.values.length;
    }
    this.rollNumericResult = this.diceRoller.roll(this.sides, 1);
    if (this.values?.length === this.sides) {
      this.rollResult = this.values[this.rollNumericResult - 1];
    } else {
      this.rollResult = this.rollNumericResult;
    }
    this.ggDieResult.emit(this.rollResult);
  }

  public getResult(): number | string {
    return this.rollResult;
  }

  public getNumericResult(): number {
    return this.rollNumericResult;
  }
}
