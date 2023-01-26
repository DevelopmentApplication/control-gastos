import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpStatusCodeEnum } from '@shared/generic.enum';
import { map } from 'rxjs';
import { RequestAuthRegistration } from '@models/auth/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Registation user
   */
  postRegistation(requestAuthRegistration: RequestAuthRegistration) {
    return this.httpClient
      .post<any>(
        environment.RESTservices.baseUrl +
          environment.RESTservices.authentication.register,
        requestAuthRegistration
      )
      .pipe(
        map((res) => res.data),
        catchError((err) => this.handleGetError(err))
      );
  }

  private handleGetError(err: any) {
    switch (err.status) {
      case HttpStatusCodeEnum.NOT_FOUND:
        if (err && err.error && err.error.message) {
          err.error.message;
        }
        break;
    }
    return throwError(err);
  }
}
