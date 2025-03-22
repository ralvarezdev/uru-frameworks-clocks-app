import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-analog-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent {

}
