import { errorType } from '@shared/generic.enum';

export class GenericError {
  status: number;
  name: string;
  messagge: string;
  details: Object;
}
