import {Component, Input, Output, EventEmitter, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

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
    if (isPlatformBrowser(this.platformId)) {
      console.log(1)
      this.clickHandler.emit(event);
    }
  }
}
