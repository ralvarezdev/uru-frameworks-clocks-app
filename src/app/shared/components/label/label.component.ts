import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-label',
  imports: [
    NgClass
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent {
  @Input() label: string = '';
  @Input() for: string = '';
  @Input() additionalClassName: string = '';

  // Get class object
  getClassObject() {
    return {
      'button': true,
      [this.additionalClassName]: !!this.additionalClassName
    };
  }
}
