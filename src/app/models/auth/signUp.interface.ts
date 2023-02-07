import { User } from '@models/auth/auth.interface';

export interface RequestSignUp {
  username: string;
  email: string;
  password: string;
}

export interface ResponseSignUp {
  jwt: string;
  user: User;
}
