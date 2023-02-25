import {
  ComponentRef,
  EventEmitter,
  Injectable,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Notification, INotification } from '../models/notification';
import { TypeNotification } from '@shared/generic.enum';
import { NotificationComponent } from '@components/notification/notification.component';
import { AppComponent } from '../app.component';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  sharedViewContainerRef: ViewContainerRef;

  /**
   * notification component create
   * @param data type INotification
   */
  createComponentNotification(data: Notification): void {
    const componentRef =
      this.sharedViewContainerRef?.createComponent<INotification>(
        NotificationComponent
      );
    componentRef
      ? ((componentRef.instance.data = data),
        (componentRef.instance.componentRef = componentRef))
      : null;
  }

  /**
   * notification component destroy
   * @param componentRef
   */
  destroyComponentNotification(componentRef: ComponentRef<INotification>) {
    componentRef.destroy();
  }

  /**
   * disabled control of formgroup
   */
  disabledFormControl(form: FormGroup, option: boolean): void {
    Object.keys(form.controls).forEach((key: string) => {
      const control = form.controls[key];
      option
        ? control.disable({ emitEvent: false })
        : control.enable({ emitEvent: false });
    });
  }
}
