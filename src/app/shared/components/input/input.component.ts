import {Component, Inject, Input, PLATFORM_ID, signal, ViewEncapsulation} from '@angular/core';
import {isPlatformBrowser, NgClass, NgStyle} from '@angular/common';
import {ButtonComponent} from '../button/button.component';
import {LabelComponent} from '../label/label.component';

@Component({
  selector: 'app-input',
  imports: [
    NgStyle,
    ButtonComponent,
    LabelComponent,
    NgClass
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  isBrowser: boolean = false;
  passwordVisibility = signal<boolean>(true)
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Please enter a value';
  @Input() required: boolean = false;
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() error: string = '...';
  @Input() showError: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    isPlatformBrowser(this.platformId)
  }

  // Toggle password visibility
  togglePasswordVisibility(event: Event) {
    if (this.isBrowser) {
      this.passwordVisibility.update(prevPasswordVisibility => !prevPasswordVisibility)
    }
  }
}
