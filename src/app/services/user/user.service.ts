import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '@services/storage/storage.service';
import { SharedService } from '@shared/service/shared.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorHandlingService } from '@shared/service/error-handling.service';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EnumTypeComponent, EnumTypeService } from '@shared/generic.enum';
import { User } from '@models/auth/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private errorHandlingService: ErrorHandlingService,
    private storageService: StorageService
  ) {}

  findOneEmail(email: string): Observable<User[]> {
    return this.httpClient
      .get<User[]>(
        environment.RESTservices.baseUrl +
          environment.RESTservices.user.findOne
            .replace('{parameterId}', 'email')
            .replace('{parameterValue}', email)
      )
      .pipe(
        map((res) => res),
        catchError((err) => this.handleGetError(err))
      );
  }

  private handleGetError(
    err: HttpErrorResponse,
    component?: EnumTypeComponent
  ) {
    this.errorHandlingService.error(err);
    return throwError(() => err);
  }

  public getUser(): User {
    return this.storageService.getUser();
  }

  public isEmailConfirm(): boolean {
    return this.getUser()?.confirmed ? true : false;
  }
}
