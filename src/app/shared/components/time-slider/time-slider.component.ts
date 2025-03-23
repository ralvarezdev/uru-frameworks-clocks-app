import {Component, Input, OnInit} from '@angular/core';
import {SliderComponent} from '../slider/slider.component';
import {identity} from 'rxjs';
import {TimeService} from '../../../features/clocks/services/time/time.service';

@Component({
  selector: 'app-time-slider',
  imports: [
    SliderComponent
  ],
  templateUrl: './time-slider.component.html',
  styleUrl: './time-slider.component.css'
})
export class TimeSliderComponent implements OnInit {
  hourSliderValue: number = 0;
  minuteSliderValue: number = 0;
  secondSliderValue: number = 0;
  @Input() id = '';

  constructor(private timeService: TimeService) {}

  // On init
  ngOnInit(): void {
    this.hourSliderValue = this.timeService.hours;
    this.minuteSliderValue = this.timeService.minutes;
    this.secondSliderValue = this.timeService.seconds;
  }

  // Hour on input change
  onHourChange(hour: number|null): void {
    if (hour === null)
      return;

    console.log('Hours changed to: ', hour);
    this.timeService.hours = hour;
  }

  // Minute on input change
  onMinuteChange(minute: number|null): void {
    if (minute === null)
      return;

    console.log('Minutes changed to: ', minute);
    this.timeService.minutes = minute;
  }

  // Second on input change
  onSecondChange(second: number|null): void {
    if (second === null)
      return

    console.log('Seconds changed to: ', second);
    this.timeService.seconds = second;
  }
}
