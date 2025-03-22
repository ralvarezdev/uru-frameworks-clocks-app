import { Component, OnInit } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";
import {TimeService} from '../../services/time.service';
import {NgForOf} from '@angular/common';
import {LabelComponent} from '../../../../shared/components/label/label.component';

@Component({
  selector: 'app-mosaic-clock',
  imports: [
    ClockLayoutComponent,
    NgForOf,
    LabelComponent
  ],
  templateUrl: './mosaic-clock.component.html',
  styleUrl: './mosaic-clock.component.css'
})
export class MosaicClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  hoursMosaic: number[] = [];
  minutesMosaic: number[] = [];
  secondsMosaic: number[] = [];

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
    this.hoursMosaic = this.getMosaic(this.hours, 23);
    this.minutesMosaic = this.getMosaic(this.minutes, 59);
    this.secondsMosaic = this.getMosaic(this.seconds, 59);
  }

  // Convert a number to a mosaic array
  getMosaic(value: number, max: number): number[] {
    return Array.from({ length: max }, (_, i) => (i < value ? 1 : 0));
  }
}
