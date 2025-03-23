import {Injectable} from '@angular/core';
import {ApiService} from '../../../../shared/services/api.service';
import {CookieService} from 'ngx-cookie-service';
import config from '../../../../../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService, private cookieService: CookieService) {
  }

  // Check if the user is authenticated
  get isAuthenticated(): boolean {
    return this.cookieService.check(config.COOKIE_ACCESS_TOKEN_NAME)
  }

  // Sign in with email/password
  signUp(email: string, password: string) {
    return this.apiService.fetch('/sign-up', {email, password})
  }

  // Sign in with Google
  signInWithGoogle() {
    return this.apiService.fetch('/sign-in/google', {})
  }

  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.apiService.fetch('/sign-in', {email, password})
  }

  // Sign out
  signOut() {
    return this.apiService.fetch('/sign-out', {})
  }
}
