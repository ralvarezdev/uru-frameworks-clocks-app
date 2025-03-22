import {Component, computed, Input, signal} from '@angular/core';
import {NgStyle} from '@angular/common';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-input',
  imports: [
    NgStyle,
    ButtonComponent
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  // Visibility
  #passwordVisibility = signal<boolean>(true)
  passwordVisibility = computed(this.#passwordVisibility)

  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Please enter a value';
  @Input() required: boolean = false;
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() error: string = '...';
  @Input() showError: boolean = false;

  // Toggle password visibility
  togglePasswordVisibility() {
    this.#passwordVisibility.update(prevPasswordVisibility => !prevPasswordVisibility)
  }
}
