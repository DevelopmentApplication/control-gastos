import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedService } from '@shared/shared.service';
import { AuthService } from '@services/auth/auth.service';

@Component({
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css'],
})
export class ForgottenPasswordComponent {
  resetFormGroup: FormGroup;
  onLoad: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.resetFormGroup = this.fb.group({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  sendLink() {
    this.loading(true);
    this.authService
      .recoverPassword(this.f.controls.email.value)
      .subscribe({
        next: () => {
          this.authService.successResponse('', 'Email sent successfully.', '');
        },
        error: () => {},
      })
      .add(() => {
        this.loading(false);
      });
  }

  loading(toggle: boolean): void {
    this.onLoad = toggle;
    this.sharedService.disabledFormControl(this.f, toggle);
  }

  get f() {
    return this.resetFormGroup;
  }
}
