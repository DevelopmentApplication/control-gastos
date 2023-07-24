import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EnumHttpStatusCode,
  EnumTypeComponent,
  EnumTypeNotification,
  EnumTypeService,
} from '@shared/generic.enum';
import { MESSAGE } from '@shared/shared.constants';
import { SharedService } from '@shared/service/shared.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor(private sharedService: SharedService) {}

  err: HttpErrorResponse;
  service?: EnumTypeService;
  component?: EnumTypeComponent;

  /**
   *
   * @param función principal de manejo de errores
   * @param service
   * @param component
   * @returns Observable error
   */

  public error(
    err: HttpErrorResponse,
    service?: EnumTypeService,
    component?: EnumTypeComponent
  ) {
    this.err = err;
    this.service = service;
    this.component = component;
    this.createNotificationError();
  }

  /**
   * Función que se encarga filtrar las solicitudes dependiento del tipo de servicio de donde provengan
   */
  private createNotificationError(): void {
    switch (this.err.status) {
      case EnumHttpStatusCode.METHOD_NOT_ALLOWED:
      case EnumHttpStatusCode.INTERNAL_SERVER_ERROR:
      case EnumHttpStatusCode.ZERO:
        this.createNotification(
          MESSAGE.NOTIFICATION.GENERIC.ERROR.MESSAGE,
          MESSAGE.NOTIFICATION.GENERIC.ERROR.TITLE,
          EnumTypeNotification.ERROR
        );
        break;
      default:
        switch (this.service) {
          case EnumTypeService.AUTH:
            this.authError();
            break;
        }
        break;
    }
  }

  private authError(): any {
    switch (this.component) {
      case EnumTypeComponent.SIGNIN:
        switch (this.err.status) {
          case EnumHttpStatusCode.BAD_REQUEST:
            this.createNotification(
              MESSAGE.NOTIFICATION.AUTH.SIGNIN.NOT_FOUND_ACCOUNT.MESSAGE,
              MESSAGE.NOTIFICATION.AUTH.SIGNIN.NOT_FOUND_ACCOUNT.TITLE,
              EnumTypeNotification.WARNING
            );
            break;
        }
        break;
      case EnumTypeComponent.SIGNUP:
        switch (this.err.status) {
          case EnumHttpStatusCode.BAD_REQUEST:
            this.createNotification(
              MESSAGE.NOTIFICATION.AUTH.SIGNIN.NOT_FOUND_ACCOUNT.MESSAGE,
              MESSAGE.NOTIFICATION.AUTH.SIGNIN.NOT_FOUND_ACCOUNT.TITLE,
              EnumTypeNotification.WARNING
            );
            break;
        }
        break;
      case EnumTypeComponent.RESETPASS:
        switch (this.err.status) {
          case EnumHttpStatusCode.BAD_REQUEST:
            this.createNotification(
              MESSAGE.NOTIFICATION.AUTH.RESETPASS.ERROR_CHANGE_PASS.MESSAGE,
              MESSAGE.NOTIFICATION.AUTH.RESETPASS.ERROR_CHANGE_PASS.TITLE,
              EnumTypeNotification.WARNING
            );
            break;
        }
        break;
      case EnumTypeComponent.FORGGOTTENPASS:
        switch (this.err.status) {
          case EnumHttpStatusCode.BAD_REQUEST:
            this.createNotification(
              MESSAGE.NOTIFICATION.AUTH.FORGGOTTEN.ERROR_SEND_LINK.MESSAGE,
              MESSAGE.NOTIFICATION.AUTH.FORGGOTTEN.ERROR_SEND_LINK.TITLE,
              EnumTypeNotification.WARNING
            );
            break;
        }
        break;
      case EnumTypeComponent.EMAILCONFIRM:
        switch (this.err.status) {
          case EnumHttpStatusCode.BAD_REQUEST:
            this.createNotification(
              MESSAGE.NOTIFICATION.AUTH.EMAILCONFIRM.ALREADY_CONFIRM.MESSAGE,
              MESSAGE.NOTIFICATION.AUTH.EMAILCONFIRM.ALREADY_CONFIRM.TITLE,
              EnumTypeNotification.WARNING
            );
            break;
        }
        break;
      case EnumTypeComponent.PROVIDER:
        break;
      default:
        this.createNotification(
          MESSAGE.NOTIFICATION.AUTH.GENERIC_ERROR_AUTH.MESSAGE,
          MESSAGE.NOTIFICATION.AUTH.GENERIC_ERROR_AUTH.TITLE,
          EnumTypeNotification.ERROR
        );
        break;
    }
  }

  private createNotification(message?: string, title?: string, type?: string) {
    this.sharedService.createNotification(
      message,
      title,
      type,
      true,
      true,
      3500
    );
  }
}
