import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-digital-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent {

}
