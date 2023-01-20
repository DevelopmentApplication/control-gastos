export const environment = {
  production: false,
  env: 'local',
  RESTservices: {
    apiToken:
      '7b59c50d18f2215e6132a2ca0e92c9a5c74155891f439fc9dd1ccd5440cfa67e793e908ae0b2c561f780bcedc505a805f6dce99b8cc80591abca1d0974ad8dd806c5b436a8a3d0671f49afba7d53887d500af36f4f0593075569fcf83f18c31f110b5abacf719eca748d5018da1175308c56dfc65ef71f49fe9db092f8b153ea',
    baseUrl: 'http://localhost:1337',
    version: {
      getVersions: '/api/versions',
      getVersion: '/api/versions/:id',
    },
    detailVersion: {
      getVersions: '/api/version-details',
      getVersion: '/api/version-details/:id',
    },
  },
};
