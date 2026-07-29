import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironmentalImpact } from '../../../../models/environmental-impact';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-environment-card',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './environment-card.component.html',
  styleUrl: './environment-card.component.scss'
})

export class EnvironmentCardComponent {
  @Input({ required: true })
  data: EnvironmentalImpact[] = [];

  get averageEnvironmentalImpact(): number {
    if (!this.data.length) return 0;
    const total = this.data.reduce(
      (sum, item) => sum + item.AVG_ENVIRONMENTAL_IMPACT,0
    );
    return total / this.data.length;
  }

  get averagePublicTransportUsage(): number {
    if (!this.data.length) return 0;
    const total = this.data.reduce(
      (sum, item) => sum + item.AVG_PUBLIC_TRANSPORT,0
   );
    return total / this.data.length;
  }

  get averageParkingUsage(): number {
    if (!this.data.length) return 0;
    const total = this.data.reduce(
      (sum, item) => sum + item.AVG_PARKING,0
    );
    return total / this.data.length;
  }

  get averagePedestrianCount(): number {
    if (!this.data.length) return 0;
    const total = this.data.reduce(
      (sum, item) => sum + item.AVG_PEDESTRIAN_COUNT,0
    );
    return total / this.data.length;
  }

  get averageSignalCompliance(): number {
    if (!this.data.length) return 0;
    const total = this.data.reduce(
      (sum, item) => sum + item.AVG_SIGNAL_COMPLIANCE,0
    );
    return total / this.data.length;
  }
}