export const environment = {
  production: true,
  env: 'prod',
  RESTservices: {
    apiToken: '',
    baseUrl: '',
    authentication: {
      auth: '/api/auth/local',
      register: '/api/auth/local/register',
    },
    historialVersion: {
      getHistorialVersiones: '/api/version-historyes',
    },
  },
};
