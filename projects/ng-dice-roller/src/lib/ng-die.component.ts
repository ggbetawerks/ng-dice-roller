import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DieType } from './die-type.enum';
import { NgDiceRollerService } from './ng-dice-roller.service';

@Component({
  selector: 'gg-die',
  template: `
    <p>
      D{{ sides == DieType.DPercentile ? 'Percentile' : sides }} =
      {{ rollResult }}
    </p>
  `,
  styles: [],
})
export class NgDieComponent implements OnInit {
  @Input() sides: number | DieType = 6;
  @Output() public ggDieResult = new EventEmitter<number>();
  rollResult: number;
  DieType = DieType;
  constructor(private diceRoller: NgDiceRollerService) {}

  ngOnInit(): void {
    this.roll();
  }

  public roll(): void {
    this.rollResult = this.diceRoller.roll(this.sides, 1);
    this.ggDieResult.emit(this.rollResult);
  }

  public getResult(): number {
    return this.rollResult;
  }
}
