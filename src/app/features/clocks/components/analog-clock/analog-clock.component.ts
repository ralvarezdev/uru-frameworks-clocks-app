import {Component, OnInit} from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-analog-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent implements OnInit {
  hourHandAngle: number = 0;
  minuteHandAngle: number = 0;
  secondHandAngle: number = 0;

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  // Update the time and calculate the angle for each hand
  updateTime(): void {
    const hours = this.timeService.hours % 12;
    const minutes = this.timeService.minutes;
    const seconds = this.timeService.seconds;

    this.hourHandAngle = (hours * 30) + (minutes / 2); // 360 degrees / 12 hours
    this.minuteHandAngle = (minutes * 6); // 360 degrees / 60 minutes
    this.secondHandAngle = (seconds * 6); // 360 degrees / 60 seconds
  }
}
