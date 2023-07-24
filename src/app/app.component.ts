import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from './services/notification/notification.service';
import { fadeIn } from '@shared/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn],
})
export class AppComponent {
  title = 'control_gastos';
  env = environment.env;
  nuevaclase: string;
  @ViewChild('genericNotificationComponent', { read: ViewContainerRef })
  public viewGenericContainerRef: ViewContainerRef;

  constructor(
    translate: TranslateService,
    private notificationServices: NotificationService
  ) {
    translate.setDefaultLang('es-CL');
    translate.use('es-CL');
  }

  ngAfterViewInit() {
    this.notificationServices.notificationViewContainerRef =
      this.viewGenericContainerRef;
  }
}
