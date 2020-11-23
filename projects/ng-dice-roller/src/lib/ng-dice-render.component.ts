import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DiceRenderEngineService } from './ng-dice-render-engine.service';

@Component({
  selector: 'gg-engine',
  template: `<div class="engine-wrapper">
    <canvas #rendererCanvas id="renderCanvas"></canvas>
  </div> `,
})
export class DiceRenderComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: DiceRenderEngineService) {}

  public async ngOnInit(): Promise<void> {
    await this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }
}
