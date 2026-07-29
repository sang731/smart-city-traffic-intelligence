import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakHoursTableComponent } from './peak-hours-table.component';

describe('PeakHoursTableComponent', () => {
  let component: PeakHoursTableComponent;
  let fixture: ComponentFixture<PeakHoursTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeakHoursTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeakHoursTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
