import {Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

export interface TableColumn{
  key:string;
  label:string;
  type?: 'string' | 'number' | 'date';
}

@Component({
  selector:'app-data-table',
  standalone:true,
  imports:[CommonModule,MatTableModule],
  templateUrl:'./data-table.component.html',
  styleUrl:'./data-table.component.scss'
})

export class DataTableComponent{
  @Input({required:true})
  columns:TableColumn[]=[];

  @Input({required:true})
  data:any[]=[];

  protected readonly isNaN = isNaN;

  get displayedColumns():string[]{
    return this.columns.map(col=>col.key);
  }
}