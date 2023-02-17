import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { StorageService } from '@services/storage/storage.service';
import { AuthService } from '@services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (
      route.routeConfig?.path === 'signIn' ||
      route.routeConfig?.path === 'signUp'
    ) {
      console.log(!this.authService.isAuthenticated());
      return !this.authService.isAuthenticated()
        ? true
        : (this.router.navigate(['dashboard']), false);
    }

    return this.authService.isAuthenticated()
      ? true
      : (this.storageService.clean(), false);
  }
}
