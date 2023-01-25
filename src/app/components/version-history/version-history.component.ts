import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../package.json';
import { Version } from '@models/version-history.interface';
import { VersionHistoryService } from '@services/version-history/version-history.service';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrls: ['./version-history.component.css'],
})
export class VersionHistoryComponent {
  loaded: Promise<boolean> | undefined;
  version: string = packageInfo.version;
  versions: Version[] = [];

  constructor(private VersionHistoryService: VersionHistoryService) {
    this.VersionHistoryService.getVersions().subscribe({
      next: (res) => {
        this.versions = res;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => (this.loaded = Promise.resolve(true)),
    });
  }
}
