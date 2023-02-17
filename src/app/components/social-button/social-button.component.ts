import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css'],
})
export class SocialButtonComponent {
  @Input() text: string | undefined;
  @Input() type: string;
  @Input() social: string;
  @Input() disabled: boolean;
  @Output() callback = new EventEmitter();

  onclick() {
    this.callback.emit();
  }
}
