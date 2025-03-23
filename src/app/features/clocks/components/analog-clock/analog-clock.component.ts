import {Component} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {BaseClockComponent} from '../base-clock/base-clock.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-analog-clock',
  imports: [
    NgForOf
  ],
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent extends BaseClockComponent {
  hourHandAngle: number = 0;
  minuteHandAngle: number = 0;
  secondHandAngle: number = 0;

  constructor(protected override timeService: TimeService) {
    super(timeService);
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
