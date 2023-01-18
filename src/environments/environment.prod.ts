export const environment = {
  production: true,
  env: 'prod',
  RESTservices: {
    apiToken:
      '8ac945274f22863cb73244c45873edd201dcf41c97c42ad7195306316fc92ab81580d389de1be1da1b69e9716a9bc995464909c819a8c1396016d71ebbc8fbe83c14e4f160168f7dfd178542f5dc15e7b4c40d761a94b3416b240b0bb8bf9ada5d48539495cc3c678fef72d98c01f2aa5075730ee65014f9175811c82453bd7b',
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
