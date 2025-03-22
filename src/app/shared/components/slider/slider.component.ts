import {Component, EventEmitter, Input, signal} from '@angular/core';
import {LabelComponent} from '../label/label.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  imports: [
    LabelComponent
  ],
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  value = signal<number>(1);
  valueChange = new EventEmitter<number>();

  @Input() id: string = '';
  @Input() label: string = 'Slider';
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;

  // Update value on input
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value.set(Number(inputElement.value));
    this.valueChange.emit(this.value());
  }
}
