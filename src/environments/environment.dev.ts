export const environment = {
  production: false,
  env: 'develop',
  RESTservices: {
    apiToken:
      '87cef25a3b73beafa67e56c671a78b0c3c818cdac91a8fd87ec1c85ec8303da45145a68a5c7a410a8fa3d117998e4362c47026e0294c09869282eab6926564a5b083603af3b89de2e0cb304d72167309fb49e7d6934c5ff55c1a79210d57fd2c9f18138bdfda1a4a6abf6892886e8ff7003deaf57169b49b2901320e629e94ce',
    baseUrl:
      'https://backcontrolgastos-dot-control-gastos-dev.ew.r.appspot.com/',
    authentication: {
      auth: '/api/auth/local',
      register: '/api/auth/local/register',
    },
    versionHistory: {
      getVersionHistory: '/api/version-historyes',
    },
  },
};
