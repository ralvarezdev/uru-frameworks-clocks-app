import {Component} from '@angular/core';
import {AnalogClockComponent} from '../../components/analog-clock/analog-clock.component';
import {ClockLayoutComponent} from '../../layouts/clock-layout/clock-layout.component';

@Component({
  selector: 'app-analog-page',
  imports: [
    AnalogClockComponent,
    ClockLayoutComponent
  ],
  templateUrl: './analog-page.component.html',
  styleUrl: './analog-page.component.css'
})
export class AnalogPageComponent {
}
