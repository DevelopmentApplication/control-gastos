export interface RequestResetPassword {
  code: string | null;
  password: string;
  passwordConfirmation: string;
}
