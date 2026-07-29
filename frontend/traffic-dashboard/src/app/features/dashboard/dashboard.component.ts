import { Component,OnInit,signal} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from '../../services/dashboard.service';

import { CitySummary } from '../../models/city-summary';
import { CongestionAnalytics } from '../../models/congestion-analytics';
import { PeakHours } from '../../models/peak-hours';
import { EnvironmentalImpact } from '../../models/environmental-impact';
import { IncidentSummary } from '../../models/incidents';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { TrafficVolumeChartComponent } from './components/traffic-volume-chart/traffic-volume-chart.component';
import { CongestionChartComponent } from './components/congestion-chart/congestion-chart.component';
import { PeakHoursTableComponent } from './components/peak-hours-table/peak-hours-table.component';
import { IncidentsTableComponent } from './components/incidents-table/incidents-table.component';
import { EnvironmentCardComponent } from './components/environment-card/environment-card.component';
import { forkJoin } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,LoadingComponent,MatIconModule,KpiCardComponent,TrafficVolumeChartComponent,CongestionChartComponent,PeakHoursTableComponent,IncidentsTableComponent,EnvironmentCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  citySummary = signal<CitySummary[]>([]);
  congestionAnalytics = signal<CongestionAnalytics[]>([]);
  peakHours = signal<PeakHours[]>([]);
  environmentalImpact = signal<EnvironmentalImpact[]>([]);
  incidents = signal<IncidentSummary[]>([]);
  loading = true;
  error = signal('');

  constructor( private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  private loadDashboard(): void {
    this.loading=true;

    forkJoin({
      citySummary: this.dashboardService.getCitySummary(),
      congestion: this.dashboardService.getCongestion(),
      peakHours: this.dashboardService.getPeakHours(),
      incidents: this.dashboardService.getIncidentSummary(),
      environment: this.dashboardService.getEnvironmentalImpact()

    }).subscribe({
      next: (result:any) => {
        this.citySummary.set(result.citySummary.data);
        this.congestionAnalytics.set(result.congestion.data);
        this.peakHours.set(result.peakHours.data);
        this.incidents.set(result.incidents.data);
        this.environmentalImpact.set(result.environment.data);
        this.loading=false;
      },

      error: (err:any) => {
        this.error.set(err.message);
        this.loading=false;
      }
    });
  }
}