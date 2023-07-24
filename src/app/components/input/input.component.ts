import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { fadeInOutAnimation } from '@shared/animation';
import { PASSWORD_VALIDATION } from '@shared/shared.constants';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  animations: [fadeInOutAnimation],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  PASSWORD_VALIDATION = PASSWORD_VALIDATION;
  @Input() control: AbstractControl;
  @Input() id: string;
  @Input() name: string;
  @Input() type: string;
  @Input() isError: boolean;
  @Input() floatLabel: string;
  @Input() showIconEyes: boolean;
  @Input() errors?: any;
  value: string;
  disabled: boolean;

  onChange: (val: any) => {};
  onTouche: () => {};

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouche = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleShowPassword() {
    this.type = 'text';
  }

  public change(event: Event) {
    this.value = (<HTMLInputElement>event.target).value;
    this.onChange(
      this.type === 'checkbox'
        ? (<HTMLInputElement>event.target).checked
        : (<HTMLInputElement>event.target).value
    );
    //this.onTouche();
  }
}
