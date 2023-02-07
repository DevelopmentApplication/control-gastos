import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/auth.guard';

const routes: Routes = [
  {
    path: 'welcome',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
