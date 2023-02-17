import { Component, ComponentRef } from '@angular/core';
import { TypeAlert } from '@shared/generic.enum';
import { SharedService } from '@shared/shared.service';
import { Alert, IAlert } from '@models/alert';
import { fadeInOut } from '@shared/animation';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
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
