import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      return true; // Allow navigation
    } else {
      this.router.navigateByUrl('/login', {skipLocationChange: false});
      return false; // Block navigation
    }
  }
}
