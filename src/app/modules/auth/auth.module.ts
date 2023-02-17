import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './auth.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { SingInComponent } from './components/sing-in/sing-in.component';

@NgModule({
  declarations: [AuthComponent, SingUpComponent, SingInComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
