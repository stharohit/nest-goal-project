import * as bcrypt from 'bcrypt';

export const encryptPassword = async (password: string) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (
  password: string,
  savedPassword: string,
) => {
  return await bcrypt.compare(password, savedPassword);
};
