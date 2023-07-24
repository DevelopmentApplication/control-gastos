import { Injectable } from '@angular/core';
import { EnumGeneric } from '@shared/generic.enum';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public stringIsNullorEmpthy(s: string): boolean {
    return s ? (s == EnumGeneric.EMPTHY ? true : false) : false;
  }
}
