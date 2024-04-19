
export const mongoUser = {
  name: process.env.DB_NAME,
  token: process.env.DB_PASSWORD,
};

export const mongoConfig = {
  url: `mongodb+srv://${mongoUser.name}:${mongoUser.token}@cluster0.okq291e.mongodb.net/?retryWrites=true&w=majority`,
  dbName: 'nest-goal-project',
};
