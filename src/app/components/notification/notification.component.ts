import { Component, ComponentRef } from '@angular/core';
import { TypeNotification } from '@shared/generic.enum';
import { SharedService } from '@shared/shared.service';
import { Notification, INotification } from '@models/notification';
import {
  fadeInOutAnimation,
  fadeOut,
  scrollAnimation,
} from '@shared/animation';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [fadeInOutAnimation, fadeOut, scrollAnimation],
})
export class NotificationComponent implements INotification {
  data: Notification | undefined;
  componentRef: ComponentRef<INotification>;
  closed: boolean;
  animationState = 'start';

  constructor(private SharedService: SharedService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'end';
    }, 150);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.data?.autoclose) {
        this.close();
      }
    }, 2500);
  }

  get typeNotification(): typeof TypeNotification {
    return TypeNotification;
  }

  close() {
    this.closed = true;
    setTimeout(() => {
      this.SharedService.destroyComponentNotification(this.componentRef);
    }, 5000);
  }
}
