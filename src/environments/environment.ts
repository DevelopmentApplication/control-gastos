export const environment = {
  production: false,
  env: 'local',
  RESTservices: {
    apiToken:
      '853884d3f462f3385cf601466fde523b92981b10ae32bbae35fb41cb440e99bd4e37bf5d2fb084b0f092ea40ce8c4ad269a3b237bb6378f5638f580ec3f466886b12b05509a1f3ddef4f0d1b6b3e6d2ecf28e9099b94e0599711e7c2c5b260ce955f53f6511126e8d2f5bfceb63d245107dd4d00dbd72bac5263e2a1b629ff01',
    baseUrl: 'http://localhost:1337',
    authentication: {
      auth: '/api/auth/local',
      register: '/api/auth/local/register',
    },
    historialVersion: {
      getHistorialVersiones: '/api/version-histories',
    },
  },
};
