export const environment = {
  production: false,
  env: 'local',
  RESTservices: {
    apiToken:
      'e3a2ba08a8e64f2058fdd47f57d046f45c1dae1a836090a545641baf238a533beeab75a2117c47696f36a84de4bec77a266ee1815ab949c792300a39247a3d6525c71b5ceed16fc8473d68002b086fbcebfa6dcbb4ff43dd0fdf25df4421ce9fa6561a6f03226a7f90e5a1f9f4b522adf852135c35bbab46e1738fce051ea7c2',
    baseUrl: 'http://localhost:1337',
    auth: {
      register: '/api/auth/local/register',
      login: '/api/auth/local',
      provider: '/auth/{provider}/callback?access_token={access_token}',
      authGoogle: '/api/connect/google',
      forgot: '/api/auth/forgot-password',
      reset: '/api/auth/reset-password',
    },
    historialVersion: {
      getHistorialVersiones: '/api/version-histories',
    },
  },
};
