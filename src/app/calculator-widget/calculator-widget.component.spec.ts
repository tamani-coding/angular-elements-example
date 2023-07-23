import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorWidgetComponent } from './calculator-widget.component';

describe('CalculatorWidgetComponent', () => {
  let component: CalculatorWidgetComponent;
  let fixture: ComponentFixture<CalculatorWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
