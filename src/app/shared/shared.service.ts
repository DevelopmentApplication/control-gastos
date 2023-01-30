import { EventEmitter, Injectable, Output } from '@angular/core';
import { Alert, IAlert } from '../models/alert';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  @Output() changeAlert: EventEmitter<Alert> = new EventEmitter();

  /**
   * @param alert Object Alert
   */
  openAlert(alert: Alert): void {
    this.changeAlert.emit(alert);
  }
  closeAlert(): void {
    this.changeAlert.emit(new Alert(false));
  }
}
