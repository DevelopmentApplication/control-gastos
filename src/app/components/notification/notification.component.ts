import { Component, ComponentRef } from '@angular/core';
import { EnumTypeNotification } from '@shared/generic.enum';
import { Notification, INotification } from '@models/notification';
import {
  fadeInOutAnimation,
  fadeOut,
  scrollAnimation,
} from '@shared/animation';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@services/notification/notification.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [fadeInOutAnimation, fadeOut, scrollAnimation],
})
export class NotificationComponent implements INotification {
  data: Notification;
  componentRef: ComponentRef<INotification>;
  closed: boolean;
  animationState = 'start';

  constructor(private notificationService: NotificationService) {}

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
    }, this.data.timeoutAutoclose);
  }

  get EnumTypeNotification(): typeof EnumTypeNotification {
    return EnumTypeNotification;
  }

  close() {
    this.closed = true;
    setTimeout(() => {
      this.notificationService.destroyComponentNotification(this.componentRef);
    }, 5000);
  }
}
