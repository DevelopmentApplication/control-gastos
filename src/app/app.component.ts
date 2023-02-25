import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { TypeNotification } from '@shared/generic.enum';
import { SharedService } from '@shared/shared.service';
import { Notification } from '@models/notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'control_gastos';
  env = environment.env;
  nuevaclase: string;
  @ViewChild('genericNotificationComponent', { read: ViewContainerRef })
  public viewGenericContainerRef: ViewContainerRef;

  constructor(
    translate: TranslateService,
    private sharedService: SharedService
  ) {
    translate.setDefaultLang('es-CL');
    translate.use('es-CL');
  }

  ngAfterViewInit() {
    this.sharedService.sharedViewContainerRef = this.viewGenericContainerRef;
  }
}
