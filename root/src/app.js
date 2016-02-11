/* globals requirejs: false */

requirejs.config({
    baseUrl: '../lib',
    paths: {
      app: '../src',
      'bs.ie10hack': 'bootstrap_util/ie10-viewport-bug-workaround',
      'jquery.alpha': 'plugin-A/jquery.alpha',
      'jquery.beta': 'plugin-B/jquery.beta',
      jquery: [
        '//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
        'jquery/jquery.min'
      ],
      jqueryui: [
        '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min',
        'jquery/jquery-ui.min'
      ],
      bootstrap: [
        '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
        'bootstrap-3.3.6-dist/js/bootstrap.min'
      ]
    },
    'shim': {
        'bs.ie10hack': ['jquery'],
        'jquery.alpha': ['jquery'],
        'jquery.beta': ['jquery']
    }
});
//Load the app
/* jshint ignore:start */
requirejs(['../src/jquery.{%= name %}'], {%= js_safe_name %}_exec);
/* jshint ignore:end */