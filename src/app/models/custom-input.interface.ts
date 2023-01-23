import { FormControl } from '@angular/forms';
export class CustomInput {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  control: FormControl;

  constructor(
    control: FormControl,
    id: string,
    name: string,
    type: string,
    label: string,
    placeholder: string = '',
    disabled: boolean = false,
    required: boolean = false
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.label = label;
    this.placeholder = placeholder;
    this.disabled = disabled;
    this.required = required;
    this.control = control;
  }
}
