import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {LabelComponent} from '../label/label.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  imports: [
    LabelComponent,
    ReactiveFormsModule
  ],
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() initialValue: number = 0;
  valueControl = new FormControl(this.initialValue);
  @Output() valueChange: EventEmitter<number|null> = new EventEmitter<number|null>();

  @Input() id: string = '';
  @Input() label: string = 'Slider';
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
}
