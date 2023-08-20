export const mongoUser = {
  name: 'rht',
  token: 'x4L2qBC1raY8ivvT',
};

export const mongoConfig = {
  url: `mongodb+srv://${mongoUser.name}:${mongoUser.token}@cluster0.okq291e.mongodb.net/?retryWrites=true&w=majority`,
  dbName: 'nest-goal-project',
};
