import { NgModule } from '@angular/core';
import { InputComponent } from '@components/input/input.component';
import { NotificationComponent } from '@components/notification/notification.component';
import { ButtonComponent } from '@components/button/button.component';
import { SocialButtonComponent } from '@components/social-button/social-button.component';
import { LogoComponent } from '@components/logo/logo/logo.component';
import { HeaderComponent } from '@components/header/header.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { CountdownComponent } from '@components/countdown/countdown.component';

@NgModule({
  declarations: [],
  imports: [
    NotificationComponent,
    SocialButtonComponent,
    LogoComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    LoadingComponent,
    CountdownComponent,
  ],
  exports: [
    NotificationComponent,
    SocialButtonComponent,
    LogoComponent,
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    LoadingComponent,
    CountdownComponent,
  ],
})
export class SharedModule {}
