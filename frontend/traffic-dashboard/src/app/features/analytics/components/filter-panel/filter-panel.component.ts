import {Component,EventEmitter,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export interface AnalyticsFilter{
  area:string;
  congestionLevel:string;
}

@Component({
  selector:'app-filter-panel',
  standalone:true,
  imports:[CommonModule,FormsModule,MatCardModule,MatFormFieldModule,MatSelectModule,MatButtonModule],
  templateUrl:'./filter-panel.component.html',
  styleUrl:'./filter-panel.component.scss'
})

export class FilterPanelComponent{
  @Output()
  filterChanged=new EventEmitter<AnalyticsFilter>();

  filter:AnalyticsFilter={
    area:'',
    congestionLevel:''
  };

  congestionLevels=['Low','Medium','High'];
  areas=['Indiranagar','Koramangala','M.G. Road','Electronic City','Jayanagar','Whitefield','Hebbal','Yeshwanthpur'];

  applyFilters():void{
    this.filterChanged.emit(this.filter);
  }

  clearFilters():void{
    this.filter={
      area:'',
      congestionLevel:'',
    };
    this.filterChanged.emit(this.filter);
  }

}