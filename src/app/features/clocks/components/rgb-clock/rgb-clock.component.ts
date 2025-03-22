import {Component, OnInit} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {LabelComponent} from '../../../../shared/components/label/label.component';

@Component({
  selector: 'app-rgb-clock',
  imports: [
    LabelComponent
  ],
  templateUrl: './rgb-clock.component.html',
  styleUrl: './rgb-clock.component.css'
})
export class RgbClockComponent   implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  hourColor: string = '';
  minuteColor: string = '';
  secondColor: string = '';

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    setInterval(() =>  {
      console.log('Updating RGB Clock');
      this.updateTime()
    }, 1000);
  }

  // Update the time and calculate the color for each part of the clock
  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
    this.hourColor = this.toRgb(this.hours, 23);
    this.minuteColor = this.toRgb(this.minutes, 59);
    this.secondColor = this.toRgb(this.seconds, 59);
  }

  // Convert a value to an RGB color
  toRgb(value: number, max: number): string {
    const colorValue = Math.floor((value / max) * 255);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  }
}
