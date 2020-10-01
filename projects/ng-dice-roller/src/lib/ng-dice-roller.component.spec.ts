import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDiceRollerComponent } from './ng-dice-roller.component';

describe('NgDiceRollerComponent', () => {
  let component: NgDiceRollerComponent;
  let fixture: ComponentFixture<NgDiceRollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDiceRollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDiceRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
