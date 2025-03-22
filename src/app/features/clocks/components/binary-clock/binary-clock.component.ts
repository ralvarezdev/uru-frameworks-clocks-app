import { Component, OnInit } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";
import {TimeService} from '../../services/time.service';
import {LabelComponent} from '../../../../shared/components/label/label.component';

@Component({
  selector: 'app-binary-clock',
  imports: [
    ClockLayoutComponent,
    LabelComponent
  ],
  templateUrl: './binary-clock.component.html',
  styleUrl: './binary-clock.component.css'
})
export class BinaryClockComponent implements OnInit {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
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
