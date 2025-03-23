import {Component} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgForOf} from '@angular/common';
import {LabelComponent} from '../../../../shared/components/label/label.component';
import {BaseClockComponent} from '../base-clock/base-clock.component';

@Component({
  selector: 'app-led-clock',
  imports: [
    LabelComponent,
    NgForOf
  ],
  templateUrl: './led-clock.component.html',
  styleUrl: './led-clock.component.css'
})
export class LedClockComponent extends BaseClockComponent {
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

  // Get the range of numbers
  range(n: number): number[] {
    return [...Array(n).keys()];
  }
}
