import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalChartComponent } from './environmental-chart.component';

describe('EnvironmentalChartComponent', () => {
  let component: EnvironmentalChartComponent;
  let fixture: ComponentFixture<EnvironmentalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentalChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
