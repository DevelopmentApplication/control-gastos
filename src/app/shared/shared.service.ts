import {
  ComponentRef,
  EventEmitter,
  Injectable,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Alert, IAlert } from '../models/alert';
import { TypeAlert } from '@shared/generic.enum';
import { AlertComponent } from '@components/alert/alert.component';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  @Output() changeAlert: EventEmitter<Alert> = new EventEmitter();

  /**
   * @param ref Reference to element create dynamic
   * @param data type IAlert
   */
  generateComponentAlert(
    viewContainerRef: ViewContainerRef,
    data: Alert
  ): void {
    const componentRef =
      viewContainerRef?.createComponent<IAlert>(AlertComponent);
    componentRef
      ? ((componentRef.instance.data = data),
        (componentRef.instance.componentRef = componentRef))
      : null;
  }

  destroyComponentAlert(componentRef: ComponentRef<IAlert>) {
    componentRef.destroy();
  }
}
