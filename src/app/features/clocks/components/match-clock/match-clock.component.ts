import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-match-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './match-clock.component.html',
  styleUrl: './match-clock.component.css'
})
export class MatchClockComponent implements OnInit {
  hours: string;
  minutes: string;
  seconds: string;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    this.hours = this.formatTimeUnit(this.timeService.hours);
    this.minutes = this.formatTimeUnit(this.timeService.minutes);
    this.seconds = this.formatTimeUnit(this.timeService.seconds);
  }

  formatTimeUnit(unit: number): string {
    return unit.toString().padStart(2, '0');
  }
}
