import { Component } from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';
import {InputComponent} from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-auth-sign-in',
  imports: [
    LayoutComponent,
    InputComponent,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  title: string = 'Sign In';
}
