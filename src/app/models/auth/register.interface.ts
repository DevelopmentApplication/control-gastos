import { User } from '@models/auth/auth.interface';

export interface RequestAuthRegistration {
  user: string;
  email: string;
  password: string;
}

export interface ResponseAuthRegistration {
  jwt: string;
  user: User;
}
