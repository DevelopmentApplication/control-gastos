import { Component, ComponentRef, Input } from '@angular/core';
import { TypeAlert } from '@shared/generic.enum';
import { Observable } from 'rxjs';
import { SharedService } from '@shared/shared.service';
import { Alert, IAlert } from '@models/alert';
import { fadeInOut } from '@shared/animation';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [fadeInOut()],
})
export class AlertComponent implements IAlert {
  data: Alert | undefined;
  componentRef: ComponentRef<IAlert>;

  constructor(private SharedService: SharedService) {}

  get typeAlert(): typeof TypeAlert {
    return TypeAlert;
  }

  close() {
    this.SharedService.destroyComponentAlert(this.componentRef);
  }
}
