import {Component, ViewEncapsulation} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgForOf} from '@angular/common';
import {LabelComponent} from '../../../../shared/components/label/label.component';
import {BaseClockComponent} from '../base-clock/base-clock.component';

@Component({
  selector: 'app-abacus-clock',
  imports: [
    NgForOf,
    LabelComponent,
  ],
  templateUrl: './abacus-clock.component.html',
  styleUrl: './abacus-clock.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AbacusClockComponent extends BaseClockComponent {
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

  // Get the beads for the abacus
  getBeads(value: number, max: number): number[] {
    return Array.from({length: max}, (_, i) => (i < value ? 1 : 0));
  }
}
