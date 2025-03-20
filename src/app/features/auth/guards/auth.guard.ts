import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {environment} from '../../../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
    const isAuthenticated = this.cookieService.check(environment['COOKIE_ACCESS_TOKEN_NAME']);
    if (isAuthenticated) {
      return true; // Allow navigation
    } else {
      this.router.navigateByUrl('/login', { skipLocationChange: false });
      return false; // Block navigation
    }
  }
}
