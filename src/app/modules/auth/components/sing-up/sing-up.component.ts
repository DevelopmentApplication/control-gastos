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
    const dataAlert = new Alert(TypeAlert.ERROR, 'HOLASA', true, 'Titulo');
    this.sharedService.generateComponentAlert(this.viewContainerRef, dataAlert);
    /*this.onLoad = true;
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
        error: (err) => {
          this.sharedService.openAlert(
            new Alert(
              true,
              TypeAlert.PRIMARY,
              err.message,
              true,
              `${err.status} ${err.name}`
            )
          );
          this.showauthalert = true;
        },
      })
      .add(() => {
        this.onLoad = false;
        this.disabledFormControl(true);
      });*/
  }

  redirectAuthGoogle() {
    this.authService.redirectAuthGoogle();
  }
}
