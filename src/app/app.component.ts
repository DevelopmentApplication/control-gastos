import { Component } from '@angular/core';
import { environment } from 'src/enviroments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'control_gastos';
  env = environment.env;
}
