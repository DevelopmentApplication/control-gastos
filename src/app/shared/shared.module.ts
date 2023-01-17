import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionService } from '@services/version.service';
import { VersionComponent } from '../components/version/version.component';

@NgModule({
  declarations: [VersionComponent],
  imports: [CommonModule],
  exports: [VersionComponent],
  providers: [VersionService],
})
export class SharedModule {}
