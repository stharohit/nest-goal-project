export class UserModel {
  readonly email: string;

  readonly password: string;

  readonly firstName: string;

  readonly lastName: string;

  constructor(
    init: Pick<UserModel, 'firstName' | 'lastName' | 'email' | 'password'>,
  ) {
    this.email = init.email;
    this.firstName = init.firstName;
    this.lastName = init.lastName;
    this.password = this.encryptPassword(init.password);
  }

  private encryptPassword(password: string) {
    // some logic to update password to hash
    return password;
  }
}
