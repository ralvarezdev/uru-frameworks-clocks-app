import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-morse-code-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './morse-code-clock.component.html',
  styleUrl: './morse-code-clock.component.css'
})
export class MorseCodeClockComponent implements OnInit {
  hours: string;
  minutes: string;
  seconds: string;

  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    this.hours = this.toMorse(this.timeService.hours);
    this.minutes = this.toMorse(this.timeService.minutes);
    this.seconds = this.toMorse(this.timeService.seconds);
  }

  toMorse(num: number): string {
    const morseCodeMap: { [key: number]: string } = {
      0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
      5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.'
    };
    return num.toString().split('').map(digit => morseCodeMap[parseInt(digit)]).join(' ');
  }
}
