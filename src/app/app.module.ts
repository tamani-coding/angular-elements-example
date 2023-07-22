import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetExampleModule } from 'projects/widget-example/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
