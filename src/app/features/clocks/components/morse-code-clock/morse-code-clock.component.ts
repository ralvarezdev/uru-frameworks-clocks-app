import {Component, OnInit} from '@angular/core';
import {TimeService} from '../../services/time/time.service';
import {LabelComponent} from '../../../../shared/components/label/label.component';

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
export class MorseCodeClockComponent implements OnInit {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(private timeService: TimeService) {}

  // On init, update the time and set an interval to update the time every second
  ngOnInit(): void {
    this.updateTime();
    setInterval(() =>  {
      console.log('Updating Morse Code Clock');
      this.updateTime()
    }, 1000);
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
