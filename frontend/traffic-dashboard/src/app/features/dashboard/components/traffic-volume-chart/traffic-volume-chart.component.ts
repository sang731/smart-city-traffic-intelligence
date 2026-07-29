import {AfterViewInit,Component,ElementRef,Input,OnChanges,SimpleChanges, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chart,ChartConfiguration,registerables} from 'chart.js';

import { CitySummary } from '../../../../models/city-summary';

Chart.register(...registerables);

@Component({
  selector: 'app-traffic-volume-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-volume-chart.component.html',
  styleUrl: './traffic-volume-chart.component.scss'
})

export class TrafficVolumeChartComponent
  implements AfterViewInit, OnChanges {
  @Input({ required: true })
  data: CitySummary[] = [];

  @ViewChild('trafficChart')
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart?: Chart;

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.updateChart();
    }
  }

  private createChart(): void {
    if (!this.chartCanvas) {
      return;
    }
    this.chart = new Chart(
      this.chartCanvas.nativeElement,
      this.getChartConfig()
    );
  }

  private updateChart(): void {
    if (!this.chart) {
      return;
    }
    this.chart.data.labels =
      this.data.map(item => item.CITY);

    this.chart.data.datasets[0].data =
      this.data.map(item => item.AVG_TRAFFIC_VOLUME);

    this.chart.update();
  }

  private getChartConfig(): ChartConfiguration<'bar'> {
    return {
      type: 'bar',
      data: {
        labels: this.data.map(item => item.CITY),
        datasets: [
          {
            label: 'Average Traffic Volume',
            data: this.data.map(item => item.AVG_TRAFFIC_VOLUME),
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
              color: '#857fb7' 
            }
          },
          y: {
            ticks: {
              color: '#efeeee' 
            },
            grid: {
              color: '#857fb7' 
            }
          }
        }
      }
    };
  }
}