import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PrivacyComponent } from '@pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PATH } from '@shared/shared.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: PATH.HOME,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: PATH.DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: PATH.AUTH,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: PATH.PROFILE,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'connect/google/redirect',
    loadChildren: () =>
      import('./modules/redirect/redirect.module').then(
        (m) => m.RedirectModule
      ),
  },
  {
    path: PATH.TERMS,
    component: TermsComponent,
  },
  {
    path: PATH.PRIVACY,
    component: PrivacyComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
