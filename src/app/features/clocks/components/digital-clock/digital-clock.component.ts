import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-digital-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent implements OnInit {
  time: string;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const hours = this.timeService.hours.toString().padStart(2, '0');
    const minutes = this.timeService.minutes.toString().padStart(2, '0');
    const seconds = this.timeService.seconds.toString().padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }
}
