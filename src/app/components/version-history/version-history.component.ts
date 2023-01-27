import { Component, OnInit } from '@angular/core';
import packageInfo from '../../../../package.json';
import { VersionHistoryService } from '@services/version-history/version-history.service';
import { IVersionHistory } from '@models/version-history/version-history.interface';
import { GenericError } from '../../models/generic.error';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrls: ['./version-history.component.css'],
})
export class VersionHistoryComponent {
  loaded: Promise<boolean> | undefined;
  appVersion: string = packageInfo.version;
  versions: IVersionHistory[]=[];

  constructor(private VersionHistoryService: VersionHistoryService) {

    this.VersionHistoryService.getVersions().subscribe({
      next: (res) => {
        this.versions = res;
      },
      complete: () => (this.loaded = Promise.resolve(true)),
    });
  }
}
