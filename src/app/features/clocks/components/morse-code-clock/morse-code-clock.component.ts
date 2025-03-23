import {Component} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {LabelComponent} from '../../../../shared/components/label/label.component';
import {BaseClockComponent} from '../base-clock/base-clock.component';

// Define a map of Morse code representations for each digit
const morseCodeMap: { [key: number]: string } = {
  0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-',
  5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.'
};

@Component({
  selector: 'app-morse-code-clock',
  imports: [
    LabelComponent
  ],
  templateUrl: './morse-code-clock.component.html',
  styleUrl: './morse-code-clock.component.css'
})
export class MorseCodeClockComponent extends BaseClockComponent{
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(protected override timeService: TimeService) {
    super(timeService);
  }

  // Update the time by converting the hours, minutes, and seconds to Morse code
  updateTime(): void {
    this.hours = this.toMorse(this.timeService.hours);
    this.minutes = this.toMorse(this.timeService.minutes);
    this.seconds = this.toMorse(this.timeService.seconds);
  }

  // Convert a number to Morse code
  toMorse(num: number): string {
    return num.toString().split('').map(digit => morseCodeMap[parseInt(digit)]).join(' ');
  }
}
