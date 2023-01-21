import { Component, OnInit } from '@angular/core';
import { HistorialVersionService } from '../../services/historial-version.service';
import { Version } from '../../models/historial-version.interface';
import packageInfo from '../../../../package.json';

@Component({
  selector: 'app-historial-version',
  templateUrl: './historial-version.component.html',
  styleUrls: ['./historial-version.component.css'],
})
export class HistorialVersionComponent {
  loaded: Promise<boolean> | undefined;
  version: string = packageInfo.version;
  versions: Version[] = [];

  constructor(private historialVersionService: HistorialVersionService) {
    this.historialVersionService.getVersions().subscribe({
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
