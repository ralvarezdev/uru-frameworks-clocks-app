import {Component, linkedSignal} from '@angular/core';
import {AuthLayoutComponent} from '../../layouts/auth-layout/auth-layout.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {InputComponent} from '../../../../shared/components/input/input.component';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-sign-up-page',
  imports: [
    AuthLayoutComponent,
    InputComponent,
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  title: string = 'Sign Up';
  link: string = '/sign-in';
  linkText: string = 'Already have an account? Sign in';
  authForm: FormGroup|null = null;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Submit Handler Click
  submitHandler(): void {
    console.log(2)
    if (this.authForm?.valid) {
      const { email, password } = this.authForm.value;
      this.authService.signUp(email, password).then(
        r=>
        this.router.navigateByUrl('/sign-in', { skipLocationChange: false, replaceUrl: true })
      ).catch(error => {
        console.error(error)
      })
    } else {
      console.error('Invalid form')
    }
  }
}
