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

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent {
  signInFormGroup: FormGroup;
  onLoad: boolean;

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
    this.signInFormGroup = this.fb.group({
      identifier: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      password: new FormControl(null, Validators.required),
    });
  }

  close() {}

  disabledFormControl(option: boolean): void {
    Object.keys(this.signInFormGroup.controls).forEach((key: string) => {
      const control = this.signInFormGroup.controls[key];
      option ? control.disable : control.enable;
    });
  }

  auth() {
    this.onLoad = true;
    this.disabledFormControl(true);
    const RequestSignIn: RequestSignIn = {
      identifier: this.signInFormGroup.controls.identifier.value,
      password: this.signInFormGroup.controls.password.value,
    };
    this.authService.signIn(RequestSignIn).subscribe({
      next: () => {},
      complete: () => {
        this.onLoad = false;
        this.disabledFormControl(true);
      },
    });
  }

  redirectAuthGoogle() {
    this.authService.redirectAuthGoogle();
  }
}
