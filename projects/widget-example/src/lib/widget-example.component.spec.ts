import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetExampleComponent } from './widget-example.component';

describe('WidgetExampleComponent', () => {
  let component: WidgetExampleComponent;
  let fixture: ComponentFixture<WidgetExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
