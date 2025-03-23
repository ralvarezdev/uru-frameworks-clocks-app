import {Component, Input, Output, EventEmitter, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  isBrowser: boolean = false;
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Output() clickHandler: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  // Emit click event
  onClick(event: Event) {
    if (this.isBrowser) {
      this.clickHandler.emit(event);
    }
  }
}
