import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpStatusCodeEnum } from '@shared/generic.enum';
import { map } from 'rxjs';
import { IVersionHistoryResponse } from '@models/version-history/version-history.interface';
import { GenericError } from '@models/generic.error';

@Injectable({
  providedIn: 'root',
})
export class VersionHistoryService {
  constructor(private httpClient: HttpClient) {}

  /**
   * get version list
   */
  getVersions() {
    return this.httpClient
      .get<IVersionHistoryResponse>(
        environment.RESTservices.baseUrl +
          environment.RESTservices.historialVersion.getHistorialVersiones +
          '?sort=createdAt:desc'
      )
      .pipe(
        map((res) => res.data),
        catchError(this.handleGetError)
      );
  }

  private handleGetError(err: HttpErrorResponse) {
    return throwError(() => err.error);
  }
}
