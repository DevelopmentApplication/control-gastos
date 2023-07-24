import { Injectable } from '@angular/core';
import { Notification } from '@models/notification';
import { NotificationService } from '@services/notification/notification.service';
import { FormGroup } from '@angular/forms';
import { LoadingService } from '@services/loading/loading.service';
import { EnumTypeNotification } from '../generic.enum';
import { Router } from '@angular/router';
import { SharedOption } from '../shared';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private notificationService: NotificationService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  public successResponse(
    messagge?: string,
    title?: string,
    redirecTo?: string
  ): void {
    this.createNotification(messagge, title, EnumTypeNotification.SUCCESS);
    redirecTo ? this.router.navigate([redirecTo]) : null;
  }

  /**
   * Create notification
   */
  createNotification(
    message?: string,
    title?: string,
    type?: string,
    closeable?: boolean,
    autoclose?: boolean,
    timeoutAutoclose?: number,
    listmessage?: string[]
  ): void {
    this.notificationService.createComponentNotification(
      new Notification(
        message,
        title,
        type,
        closeable,
        autoclose,
        timeoutAutoclose,
        listmessage
      )
    );
  }

  /**
   * remove email domain
   * @param email
   */
  removeEmailDomain(email: string): string {
    return email.substring(email.indexOf('@'), 0);
  }

  /**
   * call loading services
   * @param status
   * @param form current FormGroup
   * @param option @class SharedOption
   */
  loading(status: boolean, form: FormGroup, option?: SharedOption) {
    this.loadingService.show(status);
    this.enableOrDisabledFormControl(status, form);
    option?.resetForm ? this.resetForm(form) : null;
  }

  /**
   * reset form
   * @param form
   */
  resetForm(form: FormGroup) {
    form.reset();
  }

  /**
   * Toggle enable form group
   * @param status true or false
   * @param form current Form
   */
  private enableOrDisabledFormControl(status: boolean, form: FormGroup): void {
    Object.keys(form.controls).forEach((key: string) => {
      const control = form.controls[key];
      status
        ? control.disable({ emitEvent: false })
        : control.enable({ emitEvent: false });
    });
  }
}
