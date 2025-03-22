import {Component, OnInit} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgForOf} from '@angular/common';
import {LabelComponent} from '../../../../shared/components/label/label.component';

@Component({
  selector: 'app-led-clock',
  imports: [
    LabelComponent,
    NgForOf
  ],
  templateUrl: './led-clock.component.html',
  styleUrl: './led-clock.component.css'
})
export class LedClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    setInterval(() =>  {
      console.log('Updating LED Clock');
      this.updateTime()
    }, 1000);
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
