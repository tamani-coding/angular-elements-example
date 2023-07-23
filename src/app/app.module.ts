import { createCustomElement } from '@angular/elements';
import { NgModule, DoBootstrap, Injector, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorWidgetComponent } from './calculator-widget/calculator-widget.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [] // originally it has AppComponent
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const calculatorWidget = createCustomElement(CalculatorWidgetComponent, {
      injector: this.injector
    });
    customElements.define('calculator-widget', calculatorWidget);
  }

 }
