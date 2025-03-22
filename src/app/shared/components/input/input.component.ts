import {Component, computed, Input, OnInit, signal} from '@angular/core';
import {NgStyle} from '@angular/common';
import {ButtonComponent} from '../button/button.component';
import {LabelComponent} from '../label/label.component';

@Component({
  selector: 'app-input',
  imports: [
    NgStyle,
    ButtonComponent,
    LabelComponent
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  // Visibility
  passwordVisibility = signal<boolean>(true)

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
  togglePasswordVisibility(event: Event) {
    console.log(2)
    this.passwordVisibility.update(prevPasswordVisibility => !prevPasswordVisibility)
  }
}
