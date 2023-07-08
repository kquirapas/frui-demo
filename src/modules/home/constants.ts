import { PasswordValidatorType } from './types'

const PASSWORD_RULES: PasswordValidatorType[] = [
  {message: 'Must not be blank', validator: (e: string) => e.length > 0},
  {message: 'Must contain 1 uppercase letter', validator: (e: string) => /[A-Z]/.test(e)},
  {message: 'Must contain 1 number', validator: (e: string) => /[0-9]/.test(e)},
  {message: 'Must contain 1 symbol', validator: (e: string) => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e)}
];

export {PASSWORD_RULES};
