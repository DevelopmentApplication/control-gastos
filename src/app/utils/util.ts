import { EnumGeneric } from '@shared/generic.enum';

export class UTIL {
  static stringIsNullorEmpthy(s: string): boolean {
    return s ? (s == EnumGeneric.EMPTHY ? true : false) : true;
  }
}
