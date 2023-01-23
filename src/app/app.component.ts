import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'control_gastos';
  env = environment.env;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('es-CL');
    translate.use('es-CL');
  }
}
