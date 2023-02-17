import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
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
import { Alert, IAlert } from '@models/alert';
import { TypeAlert } from '@shared/generic.enum';
import { AlertComponent } from '@components/alert/alert.component';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
  animations: [fadeInOut()],
})
export class SingUpComponent implements OnInit {
  signUpFormGroup: FormGroup;
  onLoad: boolean;
  @ViewChild('dynamicAuthAlertComponent', { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

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

  close() {}

  disabledFormControl(option: boolean): void {
    Object.keys(this.signUpFormGroup.controls).forEach((key: string) => {
      const control = this.signUpFormGroup.controls[key];
      control.disabled
        ? control.enable({ emitEvent: false })
        : control.disable({ emitEvent: false });
    });
  }

  auth() {
    this.onLoading(true);
    this.authService
      .signUp(this.requestSignUp())
      .subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (err) => {
          this.sharedService.generateComponentAlert(
            this.viewContainerRef,
            new Alert(
              TypeAlert.PRIMARY,
              err.message,
              true,
              `${err.status} ${err.name}`
            )
          );
        },
      })
      .add(() => {
        this.onLoading(false);
      });
  }

  redirectAuthGoogle() {
    this.onLoading(true);
    this.authService.redirectAuthGoogle();
  }

  onLoading(toggle: boolean): void {
    this.onLoad = toggle;
    this.disabledFormControl(toggle);
  }

  requestSignUp(): RequestSignUp {
    return {
      username: this.signUpFormGroup.controls.email.value,
      email: this.signUpFormGroup.controls.email.value,
      password: this.signUpFormGroup.controls.password.value,
    };
  }
}
