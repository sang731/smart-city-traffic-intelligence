import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataTableComponent,TableColumn} from '../../../../shared/components/data-table/data-table.component';
import { IncidentSummary } from '../../../../models/incidents';

@Component({
  selector: 'app-incidents-table',
  standalone: true,
  imports: [CommonModule,DataTableComponent],
  templateUrl: './incidents-table.component.html',
  styleUrl: './incidents-table.component.scss'
})

export class IncidentsTableComponent {
  @Input({ required: true })
  data: IncidentSummary[] = [];

  columns: TableColumn[] = [
    {key: 'CITY',label: 'City'},
    {key: 'AREA',label: 'Area'},
    {key: 'ROAD_NAME',label: 'Road'},
    {key: 'TOTAL_INCIDENTS',label: 'Incidents'},
    {key: 'AVG_TRAFFIC',label: 'Average Traffic Volume',type:'number'},
    {key: 'AVG_SPEED',label: 'Average Speed',type:'number'},
    {key: 'LAST_INCIDENT_TIME',label: 'Last Incident',type:'date'}
  ];
}