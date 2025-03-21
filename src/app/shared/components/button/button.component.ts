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
  @Input() text: string = '';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() onClick: Function = () => {};
  @Input() className: string = '';
}
