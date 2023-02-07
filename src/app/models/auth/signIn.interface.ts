import { User } from './auth.interface';

export interface RequestSignIn {
  identifier: string;
  password: string;
}

export interface ResponseSignIn {
  jwt: string;
  user: User;
}
