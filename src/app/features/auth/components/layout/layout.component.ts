import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {LOGO_HEIGHT, LOGO_WIDTH} from '../../../../../constants';

@Component({
  selector: 'app-auth-layout',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @Input() title: string = '';
  logoHeight: number = LOGO_HEIGHT;
  logoWidth: number = LOGO_WIDTH;
}
