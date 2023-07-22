import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-elements-example';
  widgetResult = 'Widget Result: -';

  printOutput(event: number): void {
    this.widgetResult = `Widget Result: ${event}`;
  }
}
