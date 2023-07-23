import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator-widget',
  templateUrl: './calculator-widget.component.html',
  styleUrls: ['./calculator-widget.component.scss']
})
export class CalculatorWidgetComponent {

  @Input() widgetInput = 'Angular Calculator Component';
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
