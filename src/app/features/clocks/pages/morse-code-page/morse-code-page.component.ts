import {Component} from '@angular/core';
import {ClockLayoutComponent} from '../../layouts/clock-layout/clock-layout.component';
import {MorseCodeClockComponent} from '../../components/morse-code-clock/morse-code-clock.component';

@Component({
  selector: 'app-morse-code-page',
  imports: [
    ClockLayoutComponent,
    MorseCodeClockComponent
  ],
  templateUrl: './morse-code-page.component.html',
  styleUrl: './morse-code-page.component.css'
})
export class MorseCodePageComponent {

}
