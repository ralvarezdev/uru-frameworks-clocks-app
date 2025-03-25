import {Component, ViewEncapsulation} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgForOf, NgStyle} from '@angular/common';
import {BaseClockComponent} from '../base-clock/base-clock.component';

@Component({
  selector: 'app-triple-orbit-clock',
  imports: [
    NgStyle,
  ],
  templateUrl: './triple-orbit-clock.component.html',
  styleUrl: './triple-orbit-clock.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TripleOrbitClockComponent extends BaseClockComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(protected override timeService: TimeService) {
    super(timeService);
  }

  // Update the time
  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
  }

  // Get the hours orbit angle
  getHoursOrbitAngle(): number {
    return this.hours / 24 * 360;
  }

  // Get the normalized hours orbit angle
  getNormalizedHoursOrbitAngle(): number {
    return this.getHoursOrbitAngle()
  }

  // Get the minutes orbit angle
  getMinutesOrbitAngle(): number {
    return this.minutes / 60 * 360;
  }

  // Get the normalized minutes orbit angle
  getNormalizedMinutesOrbitAngle(): number {
    return this.getMinutesOrbitAngle()-this.getNormalizedHoursOrbitAngle()
  }

  // Get the seconds orbit angle
  getSecondsOrbitAngle(): number {
    return this.seconds / 60 * 360;
  }

  // Get the normalized seconds orbit angle
  getNormalizedSecondsOrbitAngle(): number {
    return this.getSecondsOrbitAngle()-this.getNormalizedHoursOrbitAngle()-this.getNormalizedMinutesOrbitAngle()
  }
}
