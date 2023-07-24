export const environment = {
  production: false,
  env: 'local',
  RESTservices: {
    apiToken:
      'a92e8211307836369ac541499fcf8fa4da9b18aa024b78bc721fd04ef60ad4d04de01657d2b7aee18075907b770fa26ef86e71a80c1512af49cd639f22af80f99cf7aba3bca006da4c37452c00c5359b3181d3ba8e28c9278fe8e56ea07bc34c49e3a62029d76a7cd4112d94a9d06d5a5a8da45d2cc95be0cadd05c7a69bdc54',
    baseUrl: 'http://localhost:1338',
    auth: {
      register: '/api/auth/local/register',
      login: '/api/auth/local',
      provider: '/auth/{provider}/callback?access_token={access_token}',
      authGoogle: '/api/connect/google',
      forgot: '/api/auth/forgot-password',
      reset: '/api/auth/reset-password',
      emailConfirmation: '/api/auth/send-email-confirmation',
    },
    user: {
      findOne: '/api/users?filters[{parameterId}]$eq={parameterValue}',
    },
    historialVersion: {
      getHistorialVersiones: '/api/version-histories',
    },
  },
};
