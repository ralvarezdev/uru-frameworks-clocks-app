import { Component } from '@angular/core';
import {AuthLayoutComponent} from '../../layouts/auth-layout/auth-layout.component';
import {InputComponent} from '../../../../shared/components/input/input.component';

@Component({
  selector: 'app-auth-sign-in-page',
  imports: [
    AuthLayoutComponent,
    InputComponent,
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {
  title: string = 'Sign In';
}
