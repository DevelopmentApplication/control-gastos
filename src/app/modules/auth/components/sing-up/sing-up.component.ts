import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { GenericError } from '@models/generic.error';
import { ErrorType, TypeAlert } from '@shared/generic.enum';
import { fadeInOut } from '@shared/animation';
import { AuthService } from '@services/auth/auth.service';
import { RequestAuthRegistration } from '@models/auth/register.interface';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/shared.service';
import { Alert } from '@models/alert';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
  animations: [fadeInOut()],
})
export class SingUpComponent implements OnInit {
  signInFormGroup: FormGroup;
  genericError: GenericError | undefined;
  messageValidationEmail: string;

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
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, Validators.required),
    });

    this.signInFormGroup.controls.email.valueChanges.subscribe((val) => {
      this.genericError = undefined;
    });
  }

  close() {
    this.sharedService.closeAlert();
  }

  auth() {
    /*this.sharedService.openAlert(
      new Alert(
        true,
        TypeAlert.PRIMARY,
        'You have 1 unread message',
        false,
        'New message'
      )
    );
    this.sharedService.openAlert(
      new Alert(
        true,
        TypeAlert.SUCCESS,
        'You have 1 unread message',
        false,
        'New message'
      )
    );
    this.sharedService.openAlert(
      new Alert(
        true,
        TypeAlert.ERROR,
        'You have 1 unread message',
        false,
        'New message'
      )
    );
    this.sharedService.openAlert(
      new Alert(
        true,
        TypeAlert.DEFAULT,
        'You have 1 unread message',
        false,
        'New message'
      )
    );*/

    this.sharedService.openAlert(
      new Alert(
        true,
        TypeAlert.PRIMARY,
        'You have 1 unread message',
        true,
        'New message'
      )
    );

    /*const requestAuthRegistration: RequestAuthRegistration = {
      user: this.signInFormGroup.controls.email.value,
      email: this.signInFormGroup.controls.email.value,
      password: this.signInFormGroup.controls.password.value,
    };
    this.authService.postRegistation(requestAuthRegistration).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
      complete: () => this.router.navigate(['welcome']),
    });*/
  }
}
