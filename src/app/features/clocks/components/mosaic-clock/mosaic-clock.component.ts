import { Component, OnInit } from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgClass, NgForOf, NgStyle} from '@angular/common';
import {LabelComponent} from '../../../../shared/components/label/label.component';

// Generate a random color for each number
const generateRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
const hoursColors = Array.from({ length: 24 }, generateRandomColor);
const minutesColors = Array.from({ length: 60 }, generateRandomColor);
const secondsColors = Array.from({ length: 60 }, generateRandomColor);

@Component({
  selector: 'app-mosaic-clock',
  imports: [
    NgForOf,
    LabelComponent,
    NgClass,
    NgStyle
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
    /*
    setInterval(() =>  {
      console.log('Updating Morse COde Clock');
      this.updateTime()
    }, 1000);
    */
  }

  // Update the time
  updateTime(): void {
    this.hours = this.timeService.hours;
    this.minutes = this.timeService.minutes;
    this.seconds = this.timeService.seconds;
    this.hoursMosaic = this.getMosaic(this.hours, 24);
    this.minutesMosaic = this.getMosaic(this.minutes, 60);
    this.secondsMosaic = this.getMosaic(this.seconds, 60);
  }

  // Convert a number to a mosaic array
  getMosaic(value: number, max: number): number[] {
    return Array.from({ length: max }, (_, i) => (i < value ? 1 : 0));
  }

  // Get the hour color for the mosaic
  getHourColor(index: number): string {
    return hoursColors[index];
  }

  // Get the minute color for the mosaic
  getMinuteColor(index: number): string {
    return minutesColors[index];
  }

  // Get the second color for the mosaic
  getSecondColor(index: number): string {
    return secondsColors[index];
  }

  // Get the class object for the mosaic
  getClassObject(tile: number): { [key: string]: boolean } {
    return {
      'mosaic-clock-container__time-unit__mosaic__tile':true,
      'active': tile === 1,
    };
  }
}
