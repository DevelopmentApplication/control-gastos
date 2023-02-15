import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '@components/input/input.component';
import { AlertComponent } from '@components/alert/alert.component';
import { ButtonComponent } from '../components/button/button.component';
import { SocialButtonComponent } from '../components/social-button/social-button.component';
import { LogoComponent } from '@components/logo/logo/logo.component';

@NgModule({
  declarations: [
    InputComponent,
    AlertComponent,
    ButtonComponent,
    SocialButtonComponent,
    LogoComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    ButtonComponent,
    SocialButtonComponent,
    LogoComponent,
  ],
})
export class SharedModule {}
