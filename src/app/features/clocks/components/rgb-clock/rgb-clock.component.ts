import {Component} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {LabelComponent} from '../../../../shared/components/label/label.component';
import {NgClass} from '@angular/common';
import {BaseClockComponent} from '../base-clock/base-clock.component';

@Component({
  selector: 'app-rgb-clock',
  imports: [
    LabelComponent,
    NgClass
  ],
  templateUrl: './rgb-clock.component.html',
  styleUrl: './rgb-clock.component.css'
})
export class RgbClockComponent extends BaseClockComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  hourColor: string = '';
  minuteColor: string = '';
  secondColor: string = '';

  constructor(protected override timeService: TimeService) {
    super(timeService);
  }

  // Update the time and calculate the color for each part of the clock
  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
    this.hourColor = this.toRgb(this.hours, 23);
    this.minuteColor = this.toRgb(this.minutes, 59);
    this.secondColor = this.toRgb(this.seconds, 59);
  }

  // Convert a value to an RGB color
  toRgb(value: number, max: number): string {
    const colorValue = Math.floor(255-((value / max) * 255));
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  }
}
