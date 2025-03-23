import {Component} from '@angular/core';
import {ClockLayoutComponent} from "../../layouts/clock-layout/clock-layout.component";
import {RgbClockComponent} from '../../components/rgb-clock/rgb-clock.component';

@Component({
  selector: 'app-rgb',
  imports: [
    ClockLayoutComponent,
    RgbClockComponent,
  ],
  templateUrl: './rgb-page.component.html',
  styleUrl: './rgb-page.component.css'
})
export class RgbPageComponent {

}
