import {Component} from '@angular/core';
import {ClockLayoutComponent} from "../../layouts/clock-layout/clock-layout.component";
import {SevenSegmentClockComponent} from '../../components/seven-segment-clock/seven-segment-clock.component';

@Component({
  selector: 'app-seven-segment-page',
  imports: [
    ClockLayoutComponent,
    SevenSegmentClockComponent,
  ],
  templateUrl: './seven-segment-page.component.html',
  styleUrl: './seven-segment-page.component.css'
})
export class SevenSegmentPageComponent {

}
