import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-binary-clock',
    imports: [
        ClockLayoutComponent
    ],
  templateUrl: './binary-clock.component.html',
  styleUrl: './binary-clock.component.css'
})
export class BinaryClockComponent {

}
