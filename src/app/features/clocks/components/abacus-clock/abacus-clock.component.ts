import { Component } from '@angular/core';
import {ClockLayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-abacus-clock',
  imports: [
    ClockLayoutComponent
  ],
  templateUrl: './abacus-clock.component.html',
  styleUrl: './abacus-clock.component.css'
})
export class AbacusClockComponent implements OnInit {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
  }

  getBeads(value: number, max: number): number[] {
    return Array.from({ length: max }, (_, i) => (i < value ? 1 : 0));
  }
}
