import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from '@models/notification';
import { TypeNotification } from '@shared/generic.enum';
import { SharedService } from '@shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private sharedService: SharedService, private router: Router) {}

  notification(): void {
    this.sharedService.createComponentNotification(
      new Notification(
        'Account created successfully',
        '',
        TypeNotification.SUCCESS,
        false,
        true
      )
    );
    this.router.navigate(['/terms']);
    /*this.sharedService.createComponentNotification(
      this.viewContainerRef,
      new Notification(
        TypeNotification.PRIMARY,
        'Body ioasjdsa iojasodi as sijad a',
        true,
        'Title'
      )
    );
    this.sharedService.createComponentNotification(
      this.viewContainerRef,
      new Notification(
        TypeNotification.ERROR,
        'Body ioasjdsa iojasodi as sijad a',
        true,
        'Title'
      )
    );
    this.sharedService.createComponentNotification(
      this.viewContainerRef,
      new Notification(
        TypeNotification.SUCCESS,
        'Body ioasjdsa iojasodi as sijad a',
        true,
        'Title'
      )
    );
    this.sharedService.createComponentNotification(
      this.viewContainerRef,
      new Notification(
        TypeNotification.WARNING,
        'Body ioasjdsa iojasodi as sijad a',
        true,
        'Title'
      )
    );*/
  }
}
