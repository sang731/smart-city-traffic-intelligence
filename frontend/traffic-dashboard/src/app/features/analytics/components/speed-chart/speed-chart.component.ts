import {Component,Input,ViewChild,ElementRef,AfterViewInit,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chart,ChartConfiguration,registerables} from 'chart.js';

import { CongestionAnalytics } from '../../../../models/congestion-analytics';

Chart.register(...registerables);

@Component({
  selector: 'app-speed-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speed-chart.component.html',
  styleUrl: './speed-chart.component.scss'
})

export class SpeedChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('speedCanvas')
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
    this.createChart();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private createChart(): void {
    if (!this.canvas) {return;}
    this.chart?.destroy();

    const grouped = this.groupByRoad();

    const config: ChartConfiguration<'line'> = {
      type: 'line',

      data: {
        labels: grouped.labels,
        datasets: [
          {
            label: 'Average Speed (km/h)',
            data: grouped.values,
            tension: 0.35,
            fill: false,
            backgroundColor: [
              '#665dbd'
            ],
            borderColor: [
              '#FFFFFF'
            ]
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
            beginAtZero:true,
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
    this.chart = new Chart(
      this.canvas.nativeElement,
      config
    );
  }

  private groupByRoad() {
    const map = new Map<string, number[]>();
    this.chartData.forEach(item => {
      if (!map.has(item.ROAD_NAME)) {
        map.set(item.ROAD_NAME, []);
      }
      map.get(item.ROAD_NAME)!.push(item.AVG_SPEED);
    });

    const labels: string[] = [];
    const values: number[] = [];

    map.forEach((list, city) => {
      labels.push(city);
      values.push(Number((list.reduce((sum, value) => sum + value, 0) /list.length).toFixed(2)));
    });
    return {labels,values};
  }
}