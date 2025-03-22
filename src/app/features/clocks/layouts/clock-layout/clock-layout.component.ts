import {Component, Input} from '@angular/core';
import {TimeSliderComponent} from "../../../../shared/components/time-slider/time-slider.component";

@Component({
  selector: 'app-clock-layout',
    imports: [
        TimeSliderComponent
    ],
  templateUrl: './clock-layout.component.html',
  styleUrl: './clock-layout.component.css'
})
export class ClockLayoutComponent {
  @Input() title: string = '';
}
