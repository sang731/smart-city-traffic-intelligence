import {Component,Input,ViewChild,ElementRef,AfterViewInit,OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';

import {Chart,ChartConfiguration,registerables} from 'chart.js';

import { CongestionAnalytics } from '../../../../models/congestion-analytics';

Chart.register(...registerables);

@Component({
  selector: 'app-congestion-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './congestion-chart.component.html',
  styleUrl: './congestion-chart.component.scss'
})

export class CongestionChartComponent implements AfterViewInit, OnDestroy {

  @ViewChild('congestionCanvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  private chartData: CongestionAnalytics[] = [];

  @Input({ required: true })
  set data(value: CongestionAnalytics[]) {
    this.chartData = value;
    if (this.canvas) {
      this.renderChart();
    }
  }

  ngAfterViewInit() {
    this.renderChart();
  }

  ngOnDestroy() {
    this.chart?.destroy();
  }

  private renderChart() {
    if (!this.canvas) {return;}

    this.chart?.destroy();

    const counts = this.getCongestionCounts();
    const ctx = this.canvas.nativeElement.getContext('2d');

    if (!ctx) {return;}

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: Object.keys(counts),
        datasets: [
          {
            label: 'Congestion',
            data: Object.values(counts),
            backgroundColor: [
              '#343457',
              '#524f81',
              '#9d95e8'
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
            labels: {
              color: '#d8d8d8',
              font: {
                size: 14
              }
            }
          }
        }
      }
    };
    this.chart = new Chart(ctx, config);
  }

  private getCongestionCounts(): Record<string, number> {
    const counts: Record<string, number> = {};

    this.chartData.forEach(item => {
      const level = item.CONGESTION_LEVEL;
      counts[level] = (counts[level] || 0) + 1;
    });

    return counts;
  }
}