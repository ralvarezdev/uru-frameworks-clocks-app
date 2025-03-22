import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../../layouts/clock-layout/clock-layout.component";
import {LedClockComponent} from '../../components/led-clock/led-clock.component';

@Component({
  selector: 'app-led-page',
  imports: [
    ClockLayoutComponent,
    LedClockComponent,
  ],
  templateUrl: './led-page.component.html',
  styleUrl: './led-page.component.css'
})
export class LedPageComponent {

}
