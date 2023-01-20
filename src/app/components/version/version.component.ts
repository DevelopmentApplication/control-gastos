import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';
import { Version } from '../../models/version.interface';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent {
  loaded: Promise<boolean> | undefined;
  version: string = packageInfo.version;
  versions: Version[] = [];

  constructor(private versionService: VersionService) {
    this.versionService.getVersions().subscribe({
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
