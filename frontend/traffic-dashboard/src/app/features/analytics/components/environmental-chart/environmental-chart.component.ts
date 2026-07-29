import {Component,Input,ViewChild,ElementRef,AfterViewInit,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chart,ChartConfiguration,registerables} from 'chart.js';

import { EnvironmentalImpact } from '../../../../models/environmental-impact';

Chart.register(...registerables);

@Component({
  selector:'app-environmental-chart',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./environmental-chart.component.html',
  styleUrl:'./environmental-chart.component.scss'
})

export class EnvironmentalChartComponent implements AfterViewInit,OnDestroy{
  @ViewChild('environmentCanvas')
  canvas!:ElementRef<HTMLCanvasElement>;

  private chart?:Chart;

  private chartData:EnvironmentalImpact[]=[];

  @Input({required:true})
  set data(value:EnvironmentalImpact[]){
    this.chartData=value;

    if(this.canvas){
      this.render();
    }
  }

  ngAfterViewInit(){
    this.render()
  }

  ngOnDestroy(){
    this.chart?.destroy();
  }

  private render(){
    if(!this.canvas) return;
    this.chart?.destroy();

    const labels=this.chartData.map(x=>x.AREA);
    const values=this.chartData.map(x=>x.AVG_ENVIRONMENTAL_IMPACT);

    const config:ChartConfiguration<'bar'>={
      type:'bar',
      data:{
        labels,
        datasets:[{
          label:'Environmental Impact',
          data:values,
          backgroundColor: [
              '#4b885d'
            ],
            borderColor: [
              '#FFFFFF'
            ],
          borderRadius:8
        }]
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{
            display:false
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#efeeee' 
            },
            grid: {
              color: '#857fb74a' 
            }
          },
          y: {
            ticks: {
              color: '#efeeee' 
            },
            grid: {
              color: '#857fb74a' 
            }
          }
        }
      }
    };
    this.chart=new Chart(
      this.canvas.nativeElement,
      config
    );
  }
}