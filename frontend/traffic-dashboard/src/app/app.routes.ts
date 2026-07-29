import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { ReportsComponent } from './features/reports/reports.component';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    },

    {
        path:'analytics',
        component:AnalyticsComponent
    },
    {
        path:'reports',
        component:ReportsComponent
    }
];
