import { Component } from '@angular/core';
import { CustomInput } from '../../models/custom-input.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authFormGroup: FormGroup;
  newInput: CustomInput;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.authFormGroup = this.fb.group({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', Validators.required),
    });
  }

  changeControlValue(value: string) {
    console.log(value);
  }
}
