import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-rgb-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './rgb-clock.component.html',
  styleUrl: './rgb-clock.component.css'
})
export class RgbClockComponent   implements OnInit {
  hours: number;
  minutes: number;
  seconds: number;
  hourColor: string;
  minuteColor: string;
  secondColor: string;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
    this.hourColor = this.toRgb(this.hours, 23);
    this.minuteColor = this.toRgb(this.minutes, 59);
    this.secondColor = this.toRgb(this.seconds, 59);
  }

  toRgb(value: number, max: number): string {
    const colorValue = Math.floor((value / max) * 255);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  }
}
