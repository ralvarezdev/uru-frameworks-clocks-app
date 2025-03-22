import { Component, OnInit } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";
import {TimeService} from '../../services/time.service';

@Component({
  selector: 'app-mosaic-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './mosaic-clock.component.html',
  styleUrl: './mosaic-clock.component.css'
})
export class MosaicClockComponent implements OnInit {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
  }

  getMosaic(value: number, max: number): number[] {
    return Array.from({ length: max }, (_, i) => (i < value ? 1 : 0));
  }
}
