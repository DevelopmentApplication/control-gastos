import { Component } from '@angular/core';
import { fadeIn } from '@shared/animation';

@Component({
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  animations: [fadeIn],
})
export class NotfoundComponent {}
