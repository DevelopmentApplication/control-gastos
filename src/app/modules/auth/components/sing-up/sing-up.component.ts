import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { fadeInOutAnimation } from '@shared/animation';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/shared.service';
import { RequestSignUp } from '@models/auth/signUp.interface';
import { TypeLogo } from '@shared/generic.enum';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
  animations: [fadeInOutAnimation],
})
export class SingUpComponent implements OnInit {
  signUpFormGroup: FormGroup;
  onLoad: boolean;
  logo = TypeLogo.ISOTYPE;

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
    this.signUpFormGroup = this.fb.group({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, Validators.required),
      acceptTerms: new FormControl(false, Validators.requiredTrue),
    });
  }

  /**
   * call services to auth
   */
  auth(): void {
    this.loading(true);
    this.authService
      .signUp(this.requestSignUp())
      .subscribe({
        next: () => {
          this.authService.successResponse(
            '',
            'User registered successfully.',
            '/dashboard'
          );
        },
      })
      .add(() => {
        this.loading(false);
      });
  }

  redirectAuthGoogle() {
    this.loading(true);
    this.authService.redirectAuthGoogle();
  }

  loading(toggle: boolean): void {
    this.onLoad = toggle;
    this.sharedService.disabledFormControl(this.f, toggle);
  }

  /**
   * build request
   * @returns RequestSignUp
   */
  requestSignUp(): RequestSignUp {
    return {
      username: this.signUpFormGroup.controls.email.value,
      email: this.signUpFormGroup.controls.email.value,
      password: this.signUpFormGroup.controls.password.value,
    };
  }

  get f() {
    return this.signUpFormGroup;
  }
}
