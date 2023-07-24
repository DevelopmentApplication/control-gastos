import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { RequestSignIn } from '@models/auth/signIn.interface';
import { AuthService } from '../../../../services/auth/auth.service';
import { SharedService } from '../../../../shared/service/shared.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.dev';
import { EnumTypeLogo } from '@shared/generic.enum';
import { MESSAGE, PASSWORD_VALIDATION, PATH } from '@shared/shared.constants';
import { fadeIn } from '@shared/animation';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
  animations: [fadeIn],
})
export class SingInComponent {
  SignInFormGroup: FormGroup;
  onLoad: boolean;
  logo = EnumTypeLogo.IMAGOTYPE;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.SignInFormGroup = this.fb.group({
      identifier: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email],
      }),
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

  /**
   * call services to auth
   */
  auth(): void {
    this.onLoad = true;
    this.sharedService.loading(true, this.f);
    this.authService
      .signIn(this.requestSignIn())
      .subscribe({
        next: () => {
          this.sharedService.successResponse(
            '',
            MESSAGE.NOTIFICATION.AUTH.SIGNIN.AUTHENTICATED_SUCCESS.MESSAGE,
            `/${PATH.PROFILE}`
          );
        },
      })
      .add(() => {
        this.onLoad = false;
        this.sharedService.loading(false, this.f);
      });
  }

  redirectAuthGoogle() {
    this.sharedService.loading(true, this.f);
    this.authService.redirectAuthGoogle();
  }

  /**
   * build request
   * @returns RequestSignIn
   */
  requestSignIn(): RequestSignIn {
    return {
      identifier: this.SignInFormGroup.controls.identifier.value,
      password: this.SignInFormGroup.controls.password.value,
    };
  }

  get f() {
    return this.SignInFormGroup;
  }
}
