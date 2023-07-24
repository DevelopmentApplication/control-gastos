import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { Observable, firstValueFrom, throwError } from 'rxjs';
import {
  EnumHttpStatusCode,
  EnumTypeComponent,
  EnumTypeService,
  EnumTypeNotification,
} from '@shared/generic.enum';
import { map } from 'rxjs';
import { RequestSignUp } from '@models/auth/signUp.interface';
import { StorageService } from '../storage/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RequestSignIn } from '../../models/auth/signIn.interface';
import { ResponseAuth, User } from '@models/auth/auth.interface';
import { RequestResetPassword } from '@models/auth/reset-password.interface.ts';
import { ErrorHandlingService } from '../../shared/service/error-handling.service';
import { UserService } from '@services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService,
    public jwtHelper: JwtHelperService,
    private errorHandlingService: ErrorHandlingService,
    private userService: UserService
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
        catchError((err) => this.handleGetError(err, EnumTypeComponent.SIGNUP))
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
        catchError((err) => this.handleGetError(err, EnumTypeComponent.SIGNIN))
      );
  }

  /**
   *
   * @param email
   */
  forggottenPassword(email: string): Observable<boolean> {
    return this.httpClient
      .post<any>(
        environment.RESTservices.baseUrl + environment.RESTservices.auth.forgot,
        { email }
      )
      .pipe(
        map((res) => (res.ok ? res.ok : false)),
        catchError((err) =>
          this.handleGetError(err, EnumTypeComponent.FORGGOTTENPASS)
        )
      );
  }

  /**
   * update user password
   */
  resetPassword(
    requestResetPassword: RequestResetPassword
  ): Observable<string> {
    return this.httpClient
      .post<string>(
        environment.RESTservices.baseUrl + environment.RESTservices.auth.reset,
        requestResetPassword
      )
      .pipe(
        map((res) => res),
        catchError((err) =>
          this.handleGetError(err, EnumTypeComponent.RESETPASS)
        )
      );
  }

  /**
   * Provider authentication
   */
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
        catchError((err) => this.handleGetError(err))
      );
  }

  /**
   * Send email to confirm
   * @param email
   * @returns
   */
  sendEmailConfirmation(email: String): Observable<string> {
    return this.httpClient
      .post<string>(
        environment.RESTservices.baseUrl +
          environment.RESTservices.auth.emailConfirmation,
        { email }
      )
      .pipe(
        map((res) => res),
        catchError((err) =>
          this.handleGetError(err, EnumTypeComponent.EMAILCONFIRM)
        )
      );
  }

  private handleGetError(
    err: HttpErrorResponse,
    component?: EnumTypeComponent
  ) {
    this.errorHandlingService.error(err, EnumTypeService.AUTH, component);
    return throwError(() => err);
  }

  public redirectAuthGoogle() {
    window.location.href =
      environment.RESTservices.baseUrl +
      environment.RESTservices.auth.authGoogle;
  }

  public isAuthenticated(): boolean {
    return this.userService.isEmailConfirm();
  }
}
