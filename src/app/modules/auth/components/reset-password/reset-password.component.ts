import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedService } from '@shared/service/shared.service';
import { AuthService } from '@services/auth/auth.service';
import { RequestResetPassword } from '@models/auth/reset-password.interface.ts';
import { ActivatedRoute } from '@angular/router';
import { MESSAGE, PASSWORD_VALIDATION, PATH } from '@shared/shared.constants';
import { fadeIn } from '@shared/animation';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  animations: [fadeIn],
})
export class ResetPasswordComponent implements OnInit {
  resetFormGroup: FormGroup;
  onLoad: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.resetFormGroup = this.fb.group({
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(PASSWORD_VALIDATION.MIN_LENGTH),
          Validators.maxLength(PASSWORD_VALIDATION.MAX_LENGTH),
        ],
      }),
    });
  }

  resetPassword() {
    this.onLoad = true;
    this.sharedService.loading(true, this.f);
    this.authService
      .resetPassword(this.requestResetPassword())
      .subscribe({
        next: () => {
          this.sharedService.successResponse(
            MESSAGE.NOTIFICATION.AUTH.RESETPASS.SUCCESS.MESSAGE,
            MESSAGE.NOTIFICATION.AUTH.RESETPASS.SUCCESS.TITLE,
            `/${PATH.AUTH}/${PATH.SIGNIN}`
          );
        },
        error: () => {},
      })
      .add(() => {
        this.onLoad = false;
        this.sharedService.loading(false, this.f);
      });
  }

  /**
   * build request
   * @returns RequestResetPassword
   */
  requestResetPassword(): RequestResetPassword {
    return {
      code: this.route.snapshot.queryParams.code,
      password: this.f.controls.password.value,
      passwordConfirmation: this.f.controls.password.value,
    };
  }

  get f() {
    return this.resetFormGroup;
  }
}
