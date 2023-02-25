import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() size: string;
  @Input() width: string;
  @Input() text: string;
  @Input() type: string;
  @Input() iconType: string | undefined;
  @Input() onLoad: boolean | undefined;
  @Input() disabled: boolean | undefined;
  @Output() callback = new EventEmitter();
  class: string;

  constructor() {
    this.size = 'lg';
    this.width = 'auto';
    this.type = 'default';
    this.text = 'button';
  }

  ngOnInit(): void {
    this.class = `${this.size} ${this.width} ${this.type}`;
  }

  onclick() {
    this.callback.emit();
  }
}
