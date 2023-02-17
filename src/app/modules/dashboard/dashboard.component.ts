import { Component } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private storageService: StorageService) {}

  logOut() {
    this.storageService.clean();
  }
}
