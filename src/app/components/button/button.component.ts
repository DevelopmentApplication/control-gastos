import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() type: string;
  @Input() icon: boolean;
  @Input() form: FormGroup;
  @Output() callback = new EventEmitter();

  onclick() {
    this.callback.emit();
  }
}
