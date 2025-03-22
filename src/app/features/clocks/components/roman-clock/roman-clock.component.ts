import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-roman-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './roman-clock.component.html',
  styleUrl: './roman-clock.component.css'
})
export class RomanClockComponent implements OnInit {
 hours: string;
  minutes: string;
  seconds: string;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    this.hours = this.toRoman(this.timeService.hours);
    this.minutes = this.toRoman(this.timeService.minutes);
    this.seconds = this.toRoman(this.timeService.seconds);
  }

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
