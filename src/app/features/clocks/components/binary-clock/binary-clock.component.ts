import { Component, OnInit } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";
import {TimeService} from '../../services/time.service';

@Component({
  selector: 'app-binary-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './binary-clock.component.html',
  styleUrl: './binary-clock.component.css'
})
export class BinaryClockComponent implements OnInit {
  hours: string;
  minutes: string;
  seconds: string;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    this.hours = this.toBinary(this.timeService.hours);
    this.minutes = this.toBinary(this.timeService.minutes);
    this.seconds = this.toBinary(this.timeService.seconds);
  }

  toBinary(num: number): string {
    return num.toString(2).padStart(8, '0');
  }
}
