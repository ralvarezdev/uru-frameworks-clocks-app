import {Component} from '@angular/core';
import {ClockLayoutComponent} from '../../layouts/clock-layout/clock-layout.component';
import {BinaryClockComponent} from '../../components/binary-clock/binary-clock.component';

@Component({
  selector: 'app-binary-page',
  imports: [
    ClockLayoutComponent,
    BinaryClockComponent
  ],
  templateUrl: './binary-page.component.html',
  styleUrl: './binary-page.component.css'
})
export class BinaryPageComponent {

}
