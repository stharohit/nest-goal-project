import * as bcrypt from 'bcrypt';

export class UserModel {
  email: string;

  password: string;

  firstName: string;

  lastName: string;

  constructor(
    init: Pick<UserModel, 'firstName' | 'lastName' | 'email' | 'password'>,
  ) {
    this.email = init.email;
    this.firstName = init.firstName;
    this.lastName = init.lastName;
    this.password = init.password;
  }
}
