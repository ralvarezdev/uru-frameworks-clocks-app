import {Component, Input, ViewEncapsulation} from '@angular/core';
import {TimeSliderComponent} from "../../../../shared/components/time-slider/time-slider.component";
import {ButtonComponent} from '../../../../shared/components/button/button.component';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {LOGO_HEIGHT, LOGO_WIDTH} from '../../../../../constants';
import {AuthService} from '../../../auth/services/auth/auth.service';

// Clocks ID by name
const ClocksIDByName: Record<string, number> = {
  'abacus': 1,
  'analog': 2,
  'binary': 3,
  'digital': 4,
  'seven-segment': 5,
  'morse-code': 6,
  'mosaic': 7,
  'rgb': 8,
  'roman': 9,
  'triple-orbit': 10
}

// Clocks name by ID
const ClocksNameByID: Record<number, string> = {
  1: 'abacus',
  2: 'analog',
  3: 'binary',
  4: 'digital',
  5: 'seven-segment',
  6: 'morse-code',
  7: 'mosaic',
  8: 'rgb',
  9: 'roman',
  10: 'triple-orbit'
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
  pageNumber: number = 0;
  maxPageNumber: number = 0;
  @Input() title: string = '';
  logoHeight: number = LOGO_HEIGHT;
  logoWidth: number = LOGO_WIDTH;

  constructor(private router: Router, private authService: AuthService) {
    this.clockName = this.router.url.split('/').pop() || '';
    this.clockID = ClocksIDByName?.[this.clockName];
    this.pageNumber = this.clockID
    this.maxPageNumber = Object.keys(ClocksIDByName).length
  }

  // On Left Arrow Click
  onLeftArrowClick(event: Event): void {
    const newClockID = this.clockID > 1 ? this.clockID - 1 : 10;
    const newClockName = ClocksNameByID?.[newClockID];
    this.router.navigateByUrl('/clocks/' + newClockName, {skipLocationChange: false, replaceUrl: true});
  }

  // On Right Arrow Click
  onRightArrowClick(event: Event): void {
    const newClockID = this.clockID < 10 ? this.clockID + 1 : 1;
    const newClockName = ClocksNameByID?.[newClockID];
    this.router.navigateByUrl('/clocks/' + newClockName, {skipLocationChange: false, replaceUrl: true});
  }

  // On Sign Out Click
  onSignOutClick(event: Event): void {
    this.authService.signOut().then(r =>
      this.router.navigateByUrl('/sign-in', {skipLocationChange: false, replaceUrl: true})
    );
  }
}
