import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { fadeInOut } from '@shared/animation';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/shared.service';
import { RequestSignUp } from '@models/auth/signUp.interface';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
  animations: [fadeInOut()],
})
export class SingUpComponent implements OnInit {
  signUpFormGroup: FormGroup;
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
    this.signUpFormGroup = this.fb.group({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, Validators.required),
      acceptTerms: new FormControl(false, Validators.requiredTrue),
    });

    this.signUpFormGroup.controls.acceptTerms.valueChanges.subscribe((val) => {
      console.log(this.signUpFormGroup.controls.acceptTerms);
    });
  }

  close() {
    this.sharedService.closeAlert();
  }

  disabledFormControl(option: boolean): void {
    Object.keys(this.signUpFormGroup.controls).forEach((key: string) => {
      const control = this.signUpFormGroup.controls[key];
      control.disabled
        ? control.enable({ emitEvent: false })
        : control.disable({ emitEvent: false });
    });
  }

  auth() {
    this.onLoad = true;
    this.disabledFormControl(true);
    const requestSignUp: any = {
      usersadsaname: this.signUpFormGroup.controls.email.value,
      emaasdasdil: this.signUpFormGroup.controls.email.value,
      password: this.signUpFormGroup.controls.password.value,
    };
    this.authService
      .signUp(requestSignUp)
      .subscribe({
        next: () => {},
      })
      .add(() => {
        this.onLoad = false;
        this.disabledFormControl(true);
      });
  }
}
