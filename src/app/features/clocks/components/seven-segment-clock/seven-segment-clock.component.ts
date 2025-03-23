import {Component} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgClass, NgForOf} from '@angular/common';
import {BaseClockComponent} from '../base-clock/base-clock.component';

@Component({
  selector: 'app-seven-segment-clock',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './seven-segment-clock.component.html',
  styleUrl: './seven-segment-clock.component.css'
})
export class SevenSegmentClockComponent extends BaseClockComponent {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(protected override timeService: TimeService) {
    super(timeService);
  }

  // Update the time and format the time units
  updateTime(): void {
    this.hours = this.formatTimeUnit(this.timeService.hours);
    this.minutes = this.formatTimeUnit(this.timeService.minutes);
    this.seconds = this.formatTimeUnit(this.timeService.seconds);
  }

  // Format a time unit
  formatTimeUnit(unit: number): string {
    return unit.toString().padStart(2, '0');
  }

  // Get segments for a digit
  getSegments(digit: string): number[] {
    // Get only the first digit
    digit = digit.split('')[0]
    if (digit === '0')
      return [1, 1, 1, 1, 1, 1, 0];
    if (digit === '1')
      return [0, 1, 1, 0, 0, 0, 0];
    if (digit === '2')
      return [1, 1, 0, 1, 1, 0, 1];
    if (digit === '3')
      return [1, 1, 1, 1, 0, 0, 1];
    if (digit === '4')
      return [0, 1, 1, 0, 0, 1, 1];
    if (digit === '5')
      return [1, 0, 1, 1, 0, 1, 1];
    if (digit === '6')
      return [1, 0, 1, 1, 1, 1, 1];
    if (digit === '7')
      return [1, 1, 1, 0, 0, 0, 0];
    if (digit === '8')
      return [1, 1, 1, 1, 1, 1, 1];
    if (digit === '9')
      return [1, 1, 1, 1, 0, 1, 1];
    return [];
  }

  // Get the segment class object
  getSegmentClassObject(isActive: number, segment: number): object {
    return {
      'segment': true,
      'segment--active': isActive===1,
      [`segment--${segment}`]: true
    };
  }
}
