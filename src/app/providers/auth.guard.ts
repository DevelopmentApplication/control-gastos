import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { StorageService } from '@services/storage/storage.service';
import { AuthService } from '@services/auth/auth.service';
import { PATH } from '@shared/shared.constants';
import { UserService } from '@services/user/user.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    if (
      route.routeConfig?.path === PATH.SIGNIN ||
      route.routeConfig?.path === PATH.SIGNUP
    ) {
      return !this.authService.isAuthenticated()
        ? true
        : (this.router.navigate([PATH.PROFILE]), false);
    }

    if (route.routeConfig?.path === PATH.PROFILE) {
      debugger;
      this.storageService.getUser()
        ? this.storageService.getUser().confirmed
          ? null
          : await firstValueFrom(
              this.userService.findOneEmail(this.storageService.getUser().email)
            ).then((result) =>
              this.storageService.setCurrentSession({
                jwt: '',
                user: result[0],
              })
            )
        : null;
    }

    return this.authService.isAuthenticated()
      ? true
      : (this.router.navigate([PATH.HOME]), false);
  }
}
