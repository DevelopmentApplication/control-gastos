import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';
import { Version } from '../../models/version.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent {
  versions: Observable<Version[]>;

  constructor(private versionService: VersionService) {
    this.versions = this.versionService.getVersions();
  }
}
