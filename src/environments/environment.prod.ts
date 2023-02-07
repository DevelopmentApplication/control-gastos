export const environment = {
  production: true,
  env: 'prod',
  RESTservices: {
    apiToken: '',
    baseUrl: '',
    auth: {
      register: '/api/auth/local/register',
      login: '/api/auth/local',
    },
    historialVersion: {
      getHistorialVersiones: '/api/version-historyes',
    },
  },
};
