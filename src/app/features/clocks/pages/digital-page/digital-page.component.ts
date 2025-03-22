import { Component } from '@angular/core';
import {DigitalClockComponent} from '../../components/digital-clock/digital-clock.component';
import {ClockLayoutComponent} from '../../layouts/clock-layout/clock-layout.component';

@Component({
  selector: 'app-digital-page',
  imports: [
    DigitalClockComponent,
    ClockLayoutComponent
  ],
  templateUrl: './digital-page.component.html',
  styleUrl: './digital-page.component.css'
})
export class DigitalPageComponent {

}
