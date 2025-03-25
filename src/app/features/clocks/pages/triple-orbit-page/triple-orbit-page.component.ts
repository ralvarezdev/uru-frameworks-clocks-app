import {Component} from '@angular/core';
import {ClockLayoutComponent} from "../../layouts/clock-layout/clock-layout.component";
import {TripleOrbitClockComponent} from '../../components/triple-orbit-clock/triple-orbit-clock.component';

@Component({
  selector: 'app-triple-orbit-page',
  imports: [
    ClockLayoutComponent,
    TripleOrbitClockComponent,
  ],
  templateUrl: './triple-orbit-page.component.html',
  styleUrl: './triple-orbit-page.component.css'
})
export class TripleOrbitPageComponent {

}
