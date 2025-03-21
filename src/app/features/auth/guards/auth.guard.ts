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
      console.log('User is authenticated');
      return true; // Allow navigation
    } else {
      console.log('User is not authenticated');
      this.router.navigateByUrl('/login', {skipLocationChange: false});
      return false; // Block navigation
    }
  }
}
