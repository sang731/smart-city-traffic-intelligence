import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ApiResponse } from '../models/api-response';

import { CitySummary } from '../models/city-summary';
import { CongestionAnalytics } from '../models/congestion-analytics';
import { PeakHours } from '../models/peak-hours';
import { EnvironmentalImpact } from '../models/environmental-impact';
import { IncidentSummary } from '../models/incidents';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getCongestionAnalytics() {
    throw new Error('Method not implemented.');
  }
  private http = inject(HttpClient);

  private readonly API = `${environment.apiBaseUrl}/dashboard`;

  constructor() { }

  getCitySummary(): Observable<ApiResponse<CitySummary[]>> {
    return this.http.get<ApiResponse<CitySummary[]>>(
      `${this.API}/city-summary`
    ).pipe(catchError(this.handleError));
  }

  getCongestion(): Observable<ApiResponse<CongestionAnalytics[]>> {

    return this.http.get<ApiResponse<CongestionAnalytics[]>>(
      `${this.API}/congestion-analytics`
    ).pipe(catchError(this.handleError));
  }

  getPeakHours(): Observable<ApiResponse<PeakHours[]>> {
    return this.http.get<ApiResponse<PeakHours[]>>(
      `${this.API}/peak-hours`
    ).pipe(catchError(this.handleError));
  }

  getEnvironmentalImpact(): Observable<ApiResponse<EnvironmentalImpact[]>> {
    return this.http.get<ApiResponse<EnvironmentalImpact[]>>(
      `${this.API}/environmental-impact`
    ).pipe(catchError(this.handleError));
  }

  getIncidentSummary(): Observable<ApiResponse<IncidentSummary[]>> {
    return this.http.get<ApiResponse<IncidentSummary[]>>(
      `${this.API}/incidents`
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'Unknown Error';
    if (error.error?.message) {
      message = error.error.message;
    } else if (error.message) {
      message = error.message;
    }
    console.error(error);
    return throwError(() => new Error(message));
  }
}