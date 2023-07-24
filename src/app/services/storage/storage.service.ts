import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseAuth } from '@models/auth/auth.interface';
import { User } from '../../models/auth/auth.interface';
import { PATH } from '@shared/shared.constants';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private router: Router) {}

  getUser(): User {
    return localStorage.getItem('user')
      ? JSON.parse(String(localStorage.getItem('user')))
      : undefined;
  }

  setCurrentSession(res: ResponseAuth): void {
    res.jwt
      ? localStorage.setItem('access_token', JSON.stringify(res.jwt))
      : null;
    localStorage.setItem('user', JSON.stringify(res.user));
    localStorage.setItem('rol', JSON.stringify(res.user.role));
  }

  clean(): void {
    localStorage.clear();
    this.router.navigate([`${PATH.HOME}`]);
  }
}
