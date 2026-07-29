import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss'
})

export class KpiCardComponent {
  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  value!: number | string;

  @Input()
  subtitle = '';

  @Input()
  icon = '📊';
}