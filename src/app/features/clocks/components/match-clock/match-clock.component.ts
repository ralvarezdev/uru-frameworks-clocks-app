import {Component, OnInit} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-match-clock',
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './match-clock.component.html',
  styleUrl: './match-clock.component.css'
})
export class MatchClockComponent implements OnInit {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    /*
    setInterval(() =>  {
      console.log('Updating Match Clock');
      this.updateTime()
    }, 1000);
    */
  }

  // Update the time and format the time units
  updateTime(): void {
    this.hours = this.formatTimeUnit(this.timeService.hours);
    this.minutes = this.formatTimeUnit(this.timeService.minutes);
    this.seconds = this.formatTimeUnit(this.timeService.seconds);
  }

  // Format a time unit
  formatTimeUnit(unit: number): string {
    return unit.toString().padStart(2, '0');
  }

  // Get segments for a digit
  getSegments(digit: string): number[] {
    // Get only the first digit
    digit = digit.split('')[0]
      if (digit === '0')
        return [1, 1, 1, 1, 1, 1, 0];
      if (digit === '1')
        return [0, 1, 1, 0, 0, 0, 0];
      if (digit === '2')
        return [1, 1, 0, 1, 1, 0, 1];
      if (digit === '3')
        return [1, 1, 1, 1, 0, 0, 1];
      if (digit === '4')
        return [0, 1, 1, 0, 0, 1, 1];
      if (digit === '5')
        return [1, 0, 1, 1, 0, 1, 1];
      if (digit === '6')
        return [1, 0, 1, 1, 1, 1, 1];
      if (digit === '7')
        return [1, 1, 1, 0, 0, 0, 0];
      if (digit === '8')
        return [1, 1, 1, 1, 1, 1, 1];
      if (digit === '9')
        return [1, 1, 1, 1, 0, 1, 1];
      return [];
  }

  // Get the class object
  getClassObject(segment: number): object {
    return {
      'segment': true,
      'active': segment,
      [`segment--${segment}`]: true
    };
  }
}
