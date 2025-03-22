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
export class MorseCodeClockComponent {

}
