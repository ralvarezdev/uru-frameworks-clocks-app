import { Component } from '@angular/core';
import {ClockLayoutComponent} from "../../layouts/clock-layout/clock-layout.component";
import {MatchClockComponent} from '../../components/match-clock/match-clock.component';

@Component({
  selector: 'app-match-page',
  imports: [
    ClockLayoutComponent,
    MatchClockComponent,
  ],
  templateUrl: './match-page.component.html',
  styleUrl: './match-page.component.css'
})
export class MatchPageComponent {

}
