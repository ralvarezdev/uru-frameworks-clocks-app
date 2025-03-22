import {Component, OnInit} from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";
import {TimeService} from '../../services/time.service';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-led-clock',
  imports: [
    ClockLayoutComponent,
    DecimalPipe
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
    setInterval(() => this.updateTime(), 1000);
  }

  // Update the time
  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
  }
}
