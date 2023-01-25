import { Component, Input } from '@angular/core';
import { GenericError } from '@models/generic.error';
import { fadeInOut } from '@shared/animation';

@Component({
  selector: 'generic-error-message',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.css'],
  animations: [fadeInOut()],
})
export class GenericErrorComponent {
  @Input() error: GenericError | undefined;
}
