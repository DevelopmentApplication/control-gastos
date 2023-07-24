import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UTIL } from '@shared/shared.constants';
import { ButtonComponent } from '@components/button/button.component';
import { fadeIn } from '@shared/animation';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  animations: [fadeIn],
})
export class CountdownComponent {
  @Input() text: string;
  @Output() callback = new EventEmitter();
  enabledResendCode: Boolean = true;
  textButtonResend: string;
  @Input() onLoad: boolean;

  async onclick() {
    this.onLoad = true;
    this.enabledResendCode = false;
    this.callback.emit();
    const targetTime = new Date();
    targetTime.setMinutes(UTIL.TIME_LIMIT_RESEND_CODE_MINUTE);
    targetTime.setSeconds(UTIL.TIME_LIMIT_RESEND_CODE_MINUTE);
    const interval = setInterval(() => {
      targetTime.setSeconds(targetTime.getSeconds() - 1);
      this.textButtonResend = `wait ${targetTime
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${targetTime
        .getSeconds()
        .toString()
        .padStart(2, '0')} to resend code`;
      if (targetTime.getMinutes() == 0) {
        clearInterval(interval);
        this.enabledResendCode = true;
      }
    }, 1000);
  }
}
