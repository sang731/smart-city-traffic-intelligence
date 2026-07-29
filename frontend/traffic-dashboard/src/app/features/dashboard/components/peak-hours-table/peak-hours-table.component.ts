import {Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataTableComponent,TableColumn} from '../../../../shared/components/data-table/data-table.component';
import { PeakHours } from '../../../../models/peak-hours';

@Component({
  selector:'app-peak-hours-table',
  standalone:true,
  imports:[CommonModule,DataTableComponent],
  templateUrl:'./peak-hours-table.component.html',
  styleUrl:'./peak-hours-table.component.scss'
})

export class PeakHoursTableComponent{
  @Input({required:true})
  data:PeakHours[]=[];

  columns:TableColumn[]=[
    {key:'TIMEBLOCK',label:'Time Block'},
    {key:'CITY',label:'City'},
    {key:'TOTAL_EVENTS',label:'Events'},
    {key:'AVG_TRAFFIC',label:'Average Traffic Volume',type:'number'},
    {key:'AVG_SPEED',label:'Average Speed',type:'number'},
    {key:'AVG_DELAY',label:'Delay',type:'number'},
    {key:'INCIDENTS',label:'Incidents'}
  ];
}