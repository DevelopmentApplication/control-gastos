import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private storageService: StorageService) {
    debugger;
  }

  logout() {
    this.storageService.clean();
  }
}
