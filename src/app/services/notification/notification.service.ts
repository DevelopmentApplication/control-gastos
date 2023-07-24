import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NotificationComponent } from '@components/notification/notification.component';
import { Notification, INotification } from '@models/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationViewContainerRef: ViewContainerRef;

  /**
   * notification component create
   * @param data type INotification
   */
  createComponentNotification(data: Notification): void {
    const componentRef =
      this.notificationViewContainerRef?.createComponent<INotification>(
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
}
