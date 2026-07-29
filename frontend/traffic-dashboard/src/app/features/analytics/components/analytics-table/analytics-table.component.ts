import {Component,Input,ViewChild,AfterViewInit,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CongestionAnalytics } from '../../../../models/congestion-analytics';

@Component({
  selector:'app-analytics-table',
  standalone:true,
  imports:[CommonModule,MatTableModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatInputModule],
  templateUrl:'./analytics-table.component.html',
  styleUrl:'./analytics-table.component.scss'

})

export class AnalyticsTableComponent implements AfterViewInit{

  displayedColumns:string[]=['city','area','road','level','volume','speed','capacity'];
  dataSource=new MatTableDataSource<CongestionAnalytics>();

  @ViewChild(MatPaginator)
  paginator!:MatPaginator;

  @ViewChild(MatSort)
  sort!:MatSort;

  @Input({required:true})
  set data(value:CongestionAnalytics[]){
    this.dataSource.data=value;

    if(this.paginator){
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    }
  }

  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  applyFilter(event:Event){
    const value=(event.target as HTMLInputElement).value;
    this.dataSource.filter=value.trim().toLowerCase();
  }
}