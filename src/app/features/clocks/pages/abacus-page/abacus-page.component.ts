import { Component } from '@angular/core';
import {AbacusClockComponent} from '../../components/abacus-clock/abacus-clock.component';
import {ClockLayoutComponent} from '../../layouts/clock-layout/clock-layout.component';

@Component({
  selector: 'app-abacus-page',
  imports: [
    ClockLayoutComponent,
    AbacusClockComponent
  ],
  templateUrl: './abacus-page.component.html',
  styleUrl: './abacus-page.component.css'
})
export class AbacusPageComponent {

}
