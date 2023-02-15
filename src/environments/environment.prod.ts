export const environment = {
  production: true,
  env: 'prod',
  RESTservices: {
    apiToken: '',
    baseUrl: '',
    auth: {
      register: '/api/auth/local/register',
      login: '/api/auth/local',
      provider: '/auth/{provider}/callback?access_token={access_token}',
    },
    historialVersion: {
      getHistorialVersiones: '/api/version-historyes',
    },
  },
};
