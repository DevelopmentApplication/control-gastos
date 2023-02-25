import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { RequestSignIn } from '@models/auth/signIn.interface';
import { AuthService } from '../../../../services/auth/auth.service';
import { SharedService } from '../../../../shared/shared.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.dev';
import { TypeLogo } from '@shared/generic.enum';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent {
  SignInFormGroup: FormGroup;
  onLoad: boolean;
  logo = TypeLogo.IMAGOTYPE;

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
      password: new FormControl(null, Validators.required),
    });
  }

  /**
   * call services to auth
   */
  auth(): void {
    this.loading(true);
    this.authService
      .signIn(this.requestSignIn())
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
