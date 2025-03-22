import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-roman-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './roman-clock.component.html',
  styleUrl: './roman-clock.component.css'
})
export class RomanClockComponent {

}
