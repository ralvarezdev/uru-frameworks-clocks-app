import {Component, Input, Output, EventEmitter} from '@angular/core';
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
  @Input() additionalClassName: string = '';
  @Output() clickHandler: EventEmitter<Event> = new EventEmitter<Event>();

  // Get class object
  getClassObject() {
    return {
      'button': true,
      [this.additionalClassName]: !!this.additionalClassName
    };
  }

  // Emit click event
  onClick(event: Event) {
    this.clickHandler.emit(event);
  }
}
