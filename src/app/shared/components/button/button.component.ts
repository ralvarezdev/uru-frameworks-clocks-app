import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() onClick: Function = () => {};
  @Input() additionalClassName: string = '';

  // Get class object
  getClassObject() {
    return {
      'button': true,
      [this.additionalClassName]: !!this.additionalClassName
    };
  }
}
