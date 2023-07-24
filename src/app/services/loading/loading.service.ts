import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  showToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  show(toggle: boolean) {
    this.showToggle.emit(toggle);
  }
}
