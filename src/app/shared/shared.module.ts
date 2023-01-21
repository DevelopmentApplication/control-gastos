import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialVersionService } from '@services/historial-version.service';
import { HistorialVersionComponent } from '../components/historial-version/historial-version.component';

@NgModule({
  declarations: [HistorialVersionComponent],
  imports: [CommonModule],
  exports: [HistorialVersionComponent],
  providers: [HistorialVersionService],
})
export class SharedModule {}
