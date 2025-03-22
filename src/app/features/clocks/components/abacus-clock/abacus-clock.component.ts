import {Component, OnInit} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgForOf} from '@angular/common';
import {LabelComponent} from '../../../../shared/components/label/label.component';

@Component({
  selector: 'app-abacus-clock',
  imports: [
    NgForOf,
    LabelComponent
  ],
  templateUrl: './abacus-clock.component.html',
  styleUrl: './abacus-clock.component.css'
})
export class AbacusClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    setInterval(() => {
      console.log('Updating Abacus Clock');
      this.timeService.increaseBySeconds(1)
      this.updateTime()
    }, 1000);
  }

  // Update the time
  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
  }

  // Get the beads for the abacus
  getBeads(value: number, max: number): number[] {
    return Array.from({ length: max }, (_, i) => (i < value ? 1 : 0));
  }
}
