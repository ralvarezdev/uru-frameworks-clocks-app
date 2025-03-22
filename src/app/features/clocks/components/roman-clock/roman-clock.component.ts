import {Component, OnInit} from '@angular/core';
import { TimeService } from '../../services/time/time.service';
import {LabelComponent} from '../../../../shared/components/label/label.component';

@Component({
  selector: 'app-roman-clock',
  imports: [
    LabelComponent
  ],
  templateUrl: './roman-clock.component.html',
  styleUrl: './roman-clock.component.css'
})
export class RomanClockComponent implements OnInit {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    setInterval(() =>  {
      console.log('Updating Roman Clock');
      this.updateTime()
    }, 1000);
  }

  // Update the time
  updateTime(): void {
    this.hours = this.toRoman(this.timeService.hours);
    this.minutes = this.toRoman(this.timeService.minutes);
    this.seconds = this.toRoman(this.timeService.seconds);
  }

  // Convert a number to a Roman numeral
  toRoman(num: number): string {
    const romanNumerals: Array<[string,number]> =  [
      ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
      ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
      ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];
    let result = '';
    for (const [roman, value] of romanNumerals) {
      while (num >= value) {
        result += roman;
        num -= value;
      }
    }
    return result;
  }
}
