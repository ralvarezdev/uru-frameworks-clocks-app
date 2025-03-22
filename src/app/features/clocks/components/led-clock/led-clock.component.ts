import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-led-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './led-clock.component.html',
  styleUrl: './led-clock.component.css'
})
export class LedClockComponent {

}
