import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from '../../services/dashboard.service';

import { CongestionAnalytics } from '../../models/congestion-analytics';
import { EnvironmentalImpact } from '../../models/environmental-impact';
import { TrafficChartComponent } from './components/traffic-chart/traffic-chart.component';
import { SpeedChartComponent } from './components/speed-chart/speed-chart.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';
import { EnvironmentalChartComponent } from './components/environmental-chart/environmental-chart.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { AnalyticsFilter } from './components/filter-panel/filter-panel.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule,MatIconModule,LoadingComponent,FilterPanelComponent,TrafficChartComponent,SpeedChartComponent,EnvironmentalChartComponent,AnalyticsTableComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})

export class AnalyticsComponent implements OnInit {
  congestion = signal<CongestionAnalytics[]>([]);
  filteredCongestion = signal<CongestionAnalytics[]>([]);
  environmental = signal<EnvironmentalImpact[]>([]);

  loading = true;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics(): void {
    this.loading=true;

    this.dashboardService.getCongestion().subscribe(res => {
        this.congestion.set(res.data);
        this.filteredCongestion.set(res.data);
      });

    this.dashboardService.getEnvironmentalImpact().subscribe(res => {
        this.environmental.set(res.data);
        this.loading=false;
      });
  }

  onFilterChanged(filter:AnalyticsFilter):void{
    let data=[...this.congestion()];

    if(filter.area){
    data=data.filter(x=>x.AREA===filter.area);
    }

    if(filter.congestionLevel){
    data=data.filter(x=>x.CONGESTION_LEVEL===filter.congestionLevel);
    }

    this.filteredCongestion.set(data);
  }
}