import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/providers/auth.guard';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { NotfoundComponent } from '../../pages/notfound/notfound.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';

const routes: Routes = [
  {
    path: 'signIn',
    canActivate: [AuthGuard],
    component: SingInComponent,
  },
  {
    path: 'signUp',
    canActivate: [AuthGuard],
    component: SingUpComponent,
  },
  {
    path: 'reset/password',
    component: ResetPasswordComponent,
  },
  {
    path: 'forgotten/password',
    component: ForgottenPasswordComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
