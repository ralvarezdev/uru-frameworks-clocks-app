import {Component, computed, Input, signal} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [
    NgStyle
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  // Visibility
  #passwordVisibility = signal<boolean>(true)
  passwordVisibility = computed(this.#passwordVisibility)
  togglePasswordVisibility: Function = () => {
    this.#passwordVisibility.update(passwordVisibility => !passwordVisibility)
  }

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Please enter a value';
  @Input() required: boolean = false;
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() error: string = '';
}
