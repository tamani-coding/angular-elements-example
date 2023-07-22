import { NgModule } from '@angular/core';
import { WidgetExampleComponent } from './widget-example.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WidgetExampleComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    WidgetExampleComponent
  ]
})
export class WidgetExampleModule { }
