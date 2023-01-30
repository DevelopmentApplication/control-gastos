import { Component, Input } from '@angular/core';
import { TypeAlert } from '@shared/generic.enum';
import { Observable } from 'rxjs';
import { SharedService } from '@shared/shared.service';
import { Alert, IAlert } from '../../models/alert';
import { fadeInOut } from '@shared/animation';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [fadeInOut()],
})
export class AlertComponent {
  alert: IAlert;

  constructor(private SharedService: SharedService) {
    this.SharedService.changeAlert.subscribe((res) => {
      this.alert = {
        show: res.show,
        type: res.type,
        title: res.title ? res.title : undefined,
        detail: res.detail ? res.detail : undefined,
        listmessage: res.listmessage ? res.listmessage : undefined,
        closeable: res.closeable ? res.closeable : undefined,
      };
    });
  }

  get typeAlert(): typeof TypeAlert {
    return TypeAlert;
  }

  close() {
    this.alert.show = false;
  }
}
