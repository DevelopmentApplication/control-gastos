import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionHistoryComponent } from '@components/version-history/version-history.component';
import { NotfoundComponent } from '@pages/notfound/notfound.component';
import { PrivacyComponent } from '@pages/privacy/privacy.component';
import { TermsComponent } from '@pages/terms/terms.component';
import { AcceptTermComponent } from '@components/accept-term/accept-term.component';
import { InputComponent } from '@components/input/input.component';
import { AuthGuard } from 'src/app/providers/auth.guard';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InterceptorService } from 'src/app/providers/interceptor';
import { ErrorInterceptorService } from 'src/app/providers/error.interceptor';
import { SharedModule } from '../../shared/shared.module';
import { ButtonComponent } from '../../components/button/button.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    SharedModule,
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
