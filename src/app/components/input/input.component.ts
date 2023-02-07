import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id: string;
  @Input() type: string;
  @Input() isError: boolean;
  @Input() floatLabel: string;
  @Input() showIconEyes: boolean;
  value: string;
  changed: (val: any) => {};
  touched: () => {};
  disabled: boolean;

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleShowPassword() {
    this.type = 'text';
  }

  public onChange(event: Event) {
    this.changed(
      this.type === 'checkbox'
        ? (<HTMLInputElement>event.target).checked
        : (<HTMLInputElement>event.target).value
    );
  }
}
