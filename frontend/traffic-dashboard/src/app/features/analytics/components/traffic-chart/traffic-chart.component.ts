import {Component,Input,ViewChild,ElementRef,AfterViewInit,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';

import {Chart,ChartConfiguration,registerables} from 'chart.js';
import { CongestionAnalytics } from '../../../../models/congestion-analytics';

Chart.register(...registerables);

@Component({
  selector: 'app-traffic-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-chart.component.html',
  styleUrl: './traffic-chart.component.scss'
})

export class TrafficChartComponent implements AfterViewInit, OnDestroy {
   @ViewChild('trafficCanvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  private chartData: CongestionAnalytics[] = [];

  @Input({ required: true })
  set data(value: CongestionAnalytics[]) {
    this.chartData = value;

    if (this.canvas) {
      this.createChart();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.createChart();
    });
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private createChart(): void {
    if(!this.canvas){return;}
    this.chart?.destroy();

    const grouped = this.groupByRoad();

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',

      data: {
        labels: grouped.labels,
        datasets: [
          {
            label: 'Average Traffic Volume',
            data: grouped.values,
            backgroundColor: [
              '#625e86'
            ],
            borderColor: [
              '#FFFFFF'
            ],
            borderRadius:8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#d8d8d8',
              font: {
                size: 14
              }
            }
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
    this.chart = new Chart(this.canvas.nativeElement,config);
  }

  private groupByRoad() {
    const map = new Map<string, number[]>();
    this.chartData.forEach(item => {
      if (!map.has(item.ROAD_NAME)) {
        map.set(item.ROAD_NAME, []);
      }
      map.get(item.ROAD_NAME)!.push(item.AVG_TRAFFIC);
    });

    const labels: string[] = [];
    const values: number[] = [];

    map.forEach((list, area) => {
      labels.push(area);
      const avg =list.reduce((a, b) => a + b, 0) /list.length;
      values.push(Number(avg.toFixed(2)));
    });

    return {labels,values};
  }
}