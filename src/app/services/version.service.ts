import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpStatusCodeEnum } from '../shared/http-status-code.enum';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Obtiene lista de versiones.
   */
  getVersions() {
    return this.httpClient
      .get<any>(
        environment.RESTservices.baseUrl +
          environment.RESTservices.version.getVersions +
          '?sort=createdAt:desc'
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
