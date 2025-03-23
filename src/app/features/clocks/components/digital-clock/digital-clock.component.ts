import {Component} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {BaseClockComponent} from '../base-clock/base-clock.component';

@Component({
  selector: 'app-digital-clock',
    imports: [],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent extends BaseClockComponent {
  time: string = '';

  constructor(protected override timeService: TimeService) {
    super(timeService);
  }

  // Update the time
  updateTime(): void {
    const hours = this.timeService.hours.toString().padStart(2, '0');
    const minutes = this.timeService.minutes.toString().padStart(2, '0');
    const seconds = this.timeService.seconds.toString().padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }
}
