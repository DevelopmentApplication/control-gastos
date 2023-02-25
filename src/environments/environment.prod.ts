export const environment = {
  production: true,
  env: 'prod',
  RESTservices: {
    apiToken: '',
    baseUrl: '',
    auth: {
      register: '/api/auth/local/register',
      login: '/api/auth/local',
      provider: '/api/auth/{provider}/callback?access_token={access_token}',
      authGoogle: '/api/connect/google',
      forgot: '/api/auth/forgot-password',
      reset: '/api/auth/reset-password',
    },
    historialVersion: {
      getHistorialVersiones: '/api/version-histories',
    },
  },
};
