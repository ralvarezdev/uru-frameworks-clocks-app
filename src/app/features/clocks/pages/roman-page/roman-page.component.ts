import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../../layouts/clock-layout/clock-layout.component";
import {RomanClockComponent} from '../../components/roman-clock/roman-clock.component';

@Component({
  selector: 'app-roman-page',
  imports: [
    ClockLayoutComponent,
    RomanClockComponent
  ],
  templateUrl: './roman-page.component.html',
  styleUrl: './roman-page.component.css'
})
export class RomanPageComponent {

}
