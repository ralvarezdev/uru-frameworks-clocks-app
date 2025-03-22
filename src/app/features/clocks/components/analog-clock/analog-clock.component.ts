import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-analog-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent implements OnInit {
  hourHandAngle: number;
  minuteHandAngle: number;
  secondHandAngle: number;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const hours = this.timeService.hours % 12;
    const minutes = this.timeService.minutes;
    const seconds = this.timeService.seconds;

    this.hourHandAngle = (hours * 30) + (minutes / 2); // 360 degrees / 12 hours
    this.minuteHandAngle = (minutes * 6); // 360 degrees / 60 minutes
    this.secondHandAngle = (seconds * 6); // 360 degrees / 60 seconds
  }
}
