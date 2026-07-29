import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficVolumeChartComponent } from './traffic-volume-chart.component';

describe('TrafficVolumeChartComponent', () => {
  let component: TrafficVolumeChartComponent;
  let fixture: ComponentFixture<TrafficVolumeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficVolumeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficVolumeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
