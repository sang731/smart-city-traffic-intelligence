import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongestionChartComponent } from './congestion-chart.component';

describe('CongestionChartComponent', () => {
  let component: CongestionChartComponent;
  let fixture: ComponentFixture<CongestionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongestionChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongestionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
