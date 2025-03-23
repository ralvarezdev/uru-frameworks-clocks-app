import {Component} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {LabelComponent} from '../../../../shared/components/label/label.component';
import {BaseClockComponent} from '../base-clock/base-clock.component';

@Component({
  selector: 'app-binary-clock',
  imports: [
    LabelComponent
  ],
  templateUrl: './binary-clock.component.html',
  styleUrl: './binary-clock.component.css'
})
export class BinaryClockComponent extends BaseClockComponent{
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(protected override timeService: TimeService) {
    super(timeService);
  }

  // Update the time by converting the hours, minutes, and seconds to binary
  updateTime(): void {
    this.hours = this.toBinary(this.timeService.hours);
    this.minutes = this.toBinary(this.timeService.minutes);
    this.seconds = this.toBinary(this.timeService.seconds);
  }

  // Convert a number to binary
  toBinary(num: number): string {
    return num.toString(2).padStart(8, '0');
  }
}
