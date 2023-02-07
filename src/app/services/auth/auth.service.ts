import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpStatusCodeEnum, TypeAlert } from '@shared/generic.enum';
import { map } from 'rxjs';
import { RequestSignUp, ResponseSignUp } from '@models/auth/signUp.interface';
import { StorageService } from '../storage/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SharedService } from '../../shared/shared.service';
import { Alert } from '@models/alert';
import { GenericError } from '@models/generic.error';
import {
  RequestSignIn,
  ResponseSignIn,
} from '../../models/auth/signIn.interface';

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
      .post<ResponseSignUp>(
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

  signIn(requestSignIn: RequestSignIn) {
    return this.httpClient
      .post<ResponseSignIn>(
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

  private handleGetError(err: HttpErrorResponse) {
    this.sharedService.openAlert(
      new Alert(
        true,
        TypeAlert.ERROR,
        err.message,
        true,
        `${err.status} ${err.name}`
      )
    );

    return throwError(() => err);
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'));
  }
}
