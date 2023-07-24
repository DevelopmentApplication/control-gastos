import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedService } from '@shared/service/shared.service';
import { AuthService } from '@services/auth/auth.service';
import { MESSAGE } from '@shared/shared.constants';
import { fadeIn, fadeInOutAnimation, fadeOut } from '@shared/animation';
import { UserService } from '@services/user/user.service';
import { EnumTypeNotification } from '@shared/generic.enum';
import { InputComponent } from '@components/input/input.component';
import { firstValueFrom } from 'rxjs';
import { UTIL } from 'src/app/utils/util';
import { User } from '@models/auth/auth.interface';

@Component({
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css'],
  animations: [fadeInOutAnimation, fadeIn],
})
export class ForgottenPasswordComponent {
  forggottenFormGroup: FormGroup;
  onLoad: boolean;
  isSend: boolean;
  userNotFound: boolean;
  countdown: number = 180;
  textButtonResend: string;
  email: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.forggottenFormGroup = this.fb.group({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  async sendCode() {
    this.onLoad = true;
    this.sharedService.loading(true, this.f);
    this.userNotFound = (await this.validateEmailUser(this.email)).length <= 0;
    if (!this.userNotFound) {
      const recover = await this.forggottenPassword(this.email);
      if (recover) {
        this.sharedService.successResponse(
          MESSAGE.NOTIFICATION.AUTH.FORGGOTTEN.SUCCESS.MESSAGE
        );
        this.isSend = true;
        this.email = this.f.controls.email.value;
      } else {
        this.sharedService.createNotification(
          MESSAGE.NOTIFICATION.AUTH.FORGGOTTEN.ERROR_SEND_LINK.MESSAGE,
          MESSAGE.NOTIFICATION.AUTH.FORGGOTTEN.ERROR_SEND_LINK.TITLE
        );
      }
    } else {
      this.sharedService.createNotification(
        MESSAGE.NOTIFICATION.USER.EMAIL_NOT_FOUND.MESSAGE,
        MESSAGE.NOTIFICATION.USER.EMAIL_NOT_FOUND.TITLE,
        EnumTypeNotification.WARNING
      );
    }
    this.onLoad = false;
    this.sharedService.loading(false, this.f, { resetForm: true });
  }

  private async validateEmailUser(email?: string): Promise<User[]> {
    return await firstValueFrom(
      this.userService.findOneEmail(email ? email : this.f.controls.email.value)
    );
  }

  private async forggottenPassword(email?: string): Promise<boolean> {
    return await firstValueFrom(
      this.authService.forggottenPassword(
        email ? email : this.f.controls.email.value
      )
    );
  }

  showError(control: AbstractControl): boolean {
    let isnulloremphty: boolean = UTIL.stringIsNullorEmpthy(control.value);
    return control.touched && control.invalid && !isnulloremphty;
  }

  get f() {
    return this.forggottenFormGroup;
  }
}
