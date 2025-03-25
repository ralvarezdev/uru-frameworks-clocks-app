import {Component} from '@angular/core';
import {AuthLayoutComponent} from '../../layouts/auth-layout/auth-layout.component';
import {InputComponent} from '../../../../shared/components/input/input.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

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
  link: string = '/sign-up';
  linkText: string = 'Don\'t have an account? Sign up';
  authForm: FormGroup|null = null;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Handle Submit Click
  submitHandler(): void {
    if (this.authForm?.valid) {
      const { email, password } = this.authForm.value;
      this.authService.signIn(email, password).then(
        r=>
        this.router.navigateByUrl('/clocks/abacus', { skipLocationChange: false, replaceUrl: true })
      ).catch(error => {
        console.error(error)
      })
    } else {
      console.error('Invalid form')
    }
  }
}
