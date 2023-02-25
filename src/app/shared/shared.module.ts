import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '@components/input/input.component';
import { NotificationComponent } from '@components/notification/notification.component';
import { ButtonComponent } from '@components/button/button.component';
import { SocialButtonComponent } from '../components/social-button/social-button.component';
import { LogoComponent } from '@components/logo/logo/logo.component';

@NgModule({
  declarations: [],
  imports: [
    NotificationComponent,
    SocialButtonComponent,
    LogoComponent,
    InputComponent,
    ButtonComponent,
  ],
  exports: [
    NotificationComponent,
    SocialButtonComponent,
    LogoComponent,
    InputComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
