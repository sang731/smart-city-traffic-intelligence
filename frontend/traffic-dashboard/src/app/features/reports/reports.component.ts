import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from '../../services/dashboard.service';

import { CitySummary } from '../../models/city-summary';
import { CongestionAnalytics } from '../../models/congestion-analytics';
import { IncidentSummary } from '../../models/incidents';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { forkJoin } from 'rxjs';

@Component({
  selector:'app-reports',
  standalone:true,
  imports:[CommonModule,LoadingComponent,MatCardModule,MatButtonModule,MatIconModule],
  templateUrl:'./reports.component.html',
  styleUrl:'./reports.component.scss'
})

export class ReportsComponent implements OnInit{
  citySummary=signal<CitySummary[]>([]);
  congestion=signal<CongestionAnalytics[]>([]);
  incidents=signal<IncidentSummary[]>([]);

  lastUpdated=new Date();
  loading=true;

  constructor(private dashboardService:DashboardService){}

  ngOnInit(){
    forkJoin({
      city: this.dashboardService.getCitySummary(),
      congestion: this.dashboardService.getCongestion(),
      incidents: this.dashboardService.getIncidentSummary()
    }).subscribe({
      next: (res) => {
        this.citySummary.set(res.city.data);
        this.congestion.set(res.congestion.data);
        this.incidents.set(res.incidents.data);
        this.loading = false; 
      },
      error: (err) => {
        console.error('Failed to fetch report data:', err);
        this.loading = false;
      }
    });
  }

  exportCsv(filename:string,data:any[]){
    if(data.length===0){return;}

    const headers=Object.keys(data[0]);
    const csv=[headers.join(','),...data.map(row=>headers.map(h=>row[h]).join(','))].join('\n');
    const blob=new Blob([csv],{type:'text/csv'});
    const url=window.URL.createObjectURL(blob);
    const a=document.createElement('a');

    a.href=url;
    a.download=filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  printReport(){
  window.print();
  }
}