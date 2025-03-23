import {Component} from '@angular/core';
import {ClockLayoutComponent} from "../../layouts/clock-layout/clock-layout.component";
import {MosaicClockComponent} from '../../components/mosaic-clock/mosaic-clock.component';

@Component({
  selector: 'app-mosaic-page',
  imports: [
    ClockLayoutComponent,
    MosaicClockComponent,
  ],
  templateUrl: './mosaic-page.component.html',
  styleUrl: './mosaic-page.component.css'
})
export class MosaicPageComponent {

}
