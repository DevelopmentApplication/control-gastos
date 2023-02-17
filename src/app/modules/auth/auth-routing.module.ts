import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/providers/auth.guard';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { NotfoundComponent } from '../../pages/notfound/notfound.component';

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
    path: 'password/reset',
    canActivate: [AuthGuard],
    component: ResetPasswordComponent,
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
