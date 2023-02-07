import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StorageService } from '@services/storage/storage.service';
import { AuthService } from '@services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.storageService.clean();
      return false;
    }
    return true;
  }
}
