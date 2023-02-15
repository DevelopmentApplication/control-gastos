import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpStatusCodeEnum, TypeAlert } from '@shared/generic.enum';
import { map } from 'rxjs';
import { RequestSignUp } from '@models/auth/signUp.interface';
import { StorageService } from '../storage/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SharedService } from '../../shared/shared.service';
import { Alert } from '@models/alert';
import { RequestSignIn } from '../../models/auth/signIn.interface';
import { ResponseAuth } from '@models/auth/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    private sharedService: SharedService,
    public jwtHelper: JwtHelperService
  ) {}

  /**
   * Registation user
   */
  signUp(requestSignUp: RequestSignUp) {
    return this.httpClient
      .post<ResponseAuth>(
        environment.RESTservices.baseUrl +
          environment.RESTservices.auth.register,
        requestSignUp
      )
      .pipe(
        map((res) => {
          this.storageService.setCurrentSession(res);
          return res;
        }),
        catchError((err) => this.handleGetError(err))
      );
  }

  /**
   * Login user
   */
  signIn(requestSignIn: RequestSignIn) {
    return this.httpClient
      .post<ResponseAuth>(
        environment.RESTservices.baseUrl + environment.RESTservices.auth.login,
        requestSignIn
      )
      .pipe(
        map((res) => {
          this.storageService.setCurrentSession(res);
          return res;
        }),
        catchError((err) => this.handleGetError(err.error))
      );
  }

  authProvider(provider: string, access_token: string) {
    return this.httpClient
      .get<ResponseAuth>(
        environment.RESTservices.baseUrl +
          environment.RESTservices.auth.provider
            .replace('{provider}', provider)
            .replace('{access_token}', access_token)
      )
      .pipe(
        map((res) => {
          this.storageService.setCurrentSession(res);
          return res;
        }),
        catchError((err) => this.handleGetError(err.error))
      );
  }

  private handleGetError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(() => err);
  }

  public redirectAuthGoogle() {
    window.location.href =
      environment.RESTservices.baseUrl +
      environment.RESTservices.auth.authGoogle;
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'));
  }
}
