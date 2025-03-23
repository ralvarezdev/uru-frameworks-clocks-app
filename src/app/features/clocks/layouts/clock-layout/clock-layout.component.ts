import {Component, Input, ViewEncapsulation} from '@angular/core';
import {TimeSliderComponent} from "../../../../shared/components/time-slider/time-slider.component";
import {ButtonComponent} from '../../../../shared/components/button/button.component';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {LOGO_HEIGHT, LOGO_WIDTH} from '../../../../../constants';

// Clocks ID by name
const ClocksIDByName: Record<string, number> = {
  'abacus': 1,
  'analog': 2,
  'binary': 3,
  'digital': 4,
  'led': 5,
  'seven-segment': 6,
  'morse-code': 7,
  'mosaic': 8,
  'rgb': 9,
  'roman': 10
}

// Clocks name by ID
const ClocksNameByID: Record<number, string> = {
  1: 'abacus',
  2: 'analog',
  3: 'binary',
  4: 'digital',
  5: 'led',
  6: 'seven-segment',
  7: 'morse-code',
  8: 'mosaic',
  9: 'rgb',
  10: 'roman'
}

@Component({
  selector: 'app-clock-layout',
  imports: [
    TimeSliderComponent,
    ButtonComponent,
    NgClass,
    NgOptimizedImage,
  ],
  templateUrl: './clock-layout.component.html',
  styleUrl: './clock-layout.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ClockLayoutComponent {
  clockID: number = 0;
  clockName: string = '';
  @Input() title: string = '';
  logoHeight: number = LOGO_HEIGHT;
  logoWidth: number = LOGO_WIDTH;

  constructor(private router: Router) {
    this.clockName = this.router.url.split('/').pop() || '';
    this.clockID = ClocksIDByName?.[this.clockName];
  }

  // On Left Arrow Click
  onLeftArrowClick(event: Event): void {
    this.clockID = this.clockID > 1 ? this.clockID - 1 : 10;
    this.clockName = ClocksNameByID?.[this.clockID];
    this.router.navigateByUrl('/clocks/' + this.clockName, {skipLocationChange: false, replaceUrl: true});
  }

  // On Right Arrow Click
  onRightArrowClick(event: Event): void {
    this.clockID = this.clockID < 10 ? this.clockID + 1 : 1;
    this.clockName = ClocksNameByID?.[this.clockID];
    this.router.navigateByUrl('/clocks/' + this.clockName, {skipLocationChange: false, replaceUrl: true});
  }
}
