import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { fadeIn, fadeInOutAnimation, fadeOut } from '@shared/animation';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/service/shared.service';
import { RequestSignUp } from '@models/auth/signUp.interface';
import { EnumTypeLogo } from '@shared/generic.enum';
import { MESSAGE, PASSWORD_VALIDATION } from '@shared/shared.constants';
import { StorageService } from '@services/storage/storage.service';
import { User } from '@models/auth/auth.interface';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
  animations: [fadeInOutAnimation, fadeOut, fadeIn],
})
export class SingUpComponent implements OnInit {
  signUpFormGroup: FormGroup;
  onLoad: boolean;
  showEmailConfirm: boolean = false;
  logo = EnumTypeLogo.ISOTYPE;
  VALIDATION_EMAIL = MESSAGE.PAGES.VALIDATION_EMAIL;
  enabledSendEmail: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initForm();
    setInterval(() => {
      this.userService.isEmailConfirm()
        ? this.router.navigate(['/home'])
        : (this.enabledSendEmail = true);
    }, 100000);
  }

  initForm(): void {
    this.signUpFormGroup = this.fb.group({
      email: new FormControl(null, {
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
      acceptTerms: new FormControl(false, Validators.requiredTrue),
    });

    this.signUpFormGroup.controls.password.valueChanges.subscribe((val) => {
      console.log(this.signUpFormGroup.controls.password);
    });
  }

  /**
   * call services to auth
   */
  auth(): void {
    this.onLoad = true;
    this.sharedService.loading(true, this.f);
    this.authService
      .signUp(this.requestSignUp())
      .subscribe({
        next: (data) => {
          this.showEmailConfirm = true;
        },
      })
      .add(() => {
        this.onLoad = false;
        this.sharedService.loading(false, this.f);
      });
  }

  sendEmailConfirmation() {
    if (this.userService.getUser() && !this.userService.isEmailConfirm()) {
      this.onLoad = true;
      this.sharedService.loading(true, this.f);
      this.authService
        .sendEmailConfirmation(this.signUpFormGroup.controls.email.value)
        .subscribe({
          next: (data) => {
            this.sharedService.successResponse(
              MESSAGE.NOTIFICATION.AUTH.SIGNUP.REGISTER_SUCCESS.MESSAGE
            );
          },
        })
        .add(() => {
          this.onLoad = false;
          this.sharedService.loading(false, this.f);
        });
    }
  }

  redirectAuthGoogle() {
    this.sharedService.loading(true, this.f);
    this.authService.redirectAuthGoogle();
  }

  /**
   * build request
   * @returns RequestSignUp
   */
  requestSignUp(): RequestSignUp {
    return {
      username: this.sharedService.removeEmailDomain(
        this.signUpFormGroup.controls.email.value
      ),
      email: this.signUpFormGroup.controls.email.value,
      password: this.signUpFormGroup.controls.password.value,
    };
  }

  get f() {
    return this.signUpFormGroup;
  }
}
