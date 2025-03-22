import {Component, OnInit} from '@angular/core';
import {TimeService} from '../../services/time/time.service';

@Component({
  selector: 'app-digital-clock',
    imports: [],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent implements OnInit {
  time: string = '';

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    /*
    setInterval(() =>  {
      console.log('Updating Digital Clock');
      this.updateTime()
    }, 1000);
    */
  }

  // Update the time
  updateTime(): void {
    const hours = this.timeService.hours.toString().padStart(2, '0');
    const minutes = this.timeService.minutes.toString().padStart(2, '0');
    const seconds = this.timeService.seconds.toString().padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }
}
