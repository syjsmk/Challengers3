require.config({
  paths: {
    'angular': '../lib/angular'
  },
  shim: {
    'angular': {
      exports: 'angular'
    }
  },
  deps: ['./bootstrap']
});
