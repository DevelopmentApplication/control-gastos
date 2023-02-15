import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Alert } from '@models/alert';
import { TypeAlert } from '@shared/generic.enum';
import { SharedService } from '@shared/shared.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements AfterViewInit {
  @Input() type: string;
  @ViewChild('dynamicWelcomeAlertComponent', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.callAlert();
    this.cdRef.detectChanges();
  }

  callAlert() {
    const dataAlert = new Alert(
      TypeAlert.PRIMARY,
      'CHAOOO',
      true,
      'LKSDAJIDJDSJDS'
    );
    this.sharedService.generateComponentAlert(this.viewContainerRef, dataAlert);
  }
}
