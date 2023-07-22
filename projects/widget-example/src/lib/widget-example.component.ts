import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-widget-example',
  templateUrl: './widget-example.component.html',
  styleUrls: ['./widget-example.component.scss']
})
export class WidgetExampleComponent {

  @Input() widgetInput = 'Widget Example';
  @Output() widgetOutput = new EventEmitter<number>();

  number1 = 0;
  number2 = 0;

  add(): void {
    this.widgetOutput.emit(this.number1 + this.number2);
  }

  subtract(): void {
    this.widgetOutput.emit(this.number1 - this.number2);
  }

  multiply(): void {
    this.widgetOutput.emit(this.number1 * this.number2);
  }

  divide(): void {
    this.widgetOutput.emit(this.number1 / this.number2);
  }
}
