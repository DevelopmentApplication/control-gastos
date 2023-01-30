import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '@components/input/input.component';
import { AlertComponent } from '@components/alert/alert.component';

@NgModule({
  declarations: [InputComponent, AlertComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AlertComponent,
  ],
})
export class SharedModule {}
