/*
 * grunt-init-jquery-plugin-stub
 * https://github.com/rob-wood1974/jquery-plugin-stub
 *
 * Copyright (c) 2016 Rob Wood, contributors
 * Licensed under the MIT license.
 */
/* globals exports */
(function () {
   'use strict';

  // Basic template description.
  exports.description = 'Create a jQuery plugin stub/skeleton (using RequireJS with core dependencies and dev tasks setup) with [grunt-init][].';
  
  // Template-specific notes to be displayed before question prompts.
  exports.notes = '\n\n_Project name_ should not contain "jquery" or "js" and ' +
    'should be a unique ID not already in use at plugins.jquery.com. _Project ' +
    'title_ should be a human-readable title, and doesn\'t need to contain ' +
    'the word "jQuery", although it may. For example, a plugin titled "Awesome ' +
    'Plugin" might have the name "awesome-plugin".' +
    '\n\n'+
    'For more information, please see the following documentation:' +
    '\n\n'+
    'Naming Your Plugin      http://plugins.jquery.com/docs/names/\n' +
    'Publishing Your Plugin  http://plugins.jquery.com/docs/publish/\n' +
    'Package Manifest        http://plugins.jquery.com/docs/package-manifest/';
  
  // Template-specific notes to be displayed after question prompts.
  exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';
  
  // Any existing file or directory matching this wildcard will cause a warning.
  exports.warnOn = '*';
  
  // The actual init template.
  exports.template = function(grunt, init, done) {
  
    init.process({type: 'jquery'}, [
      // Prompt for these values.
      init.prompt('name'),
      init.prompt('title', function(value, data, done) {
        // Fix jQuery capitalization.
        value = value.replace(/jquery/gi, 'jQuery');
        done(null, value);
      }),
      init.prompt('description', 'A jQuery plugin stub.'),
      init.prompt('version', '1.0.0'),
      init.prompt('repository', 'https://github.com/rob-wood1999/jquery-plugin-stub.git'),
      init.prompt('homepage'),
      init.prompt('bugs'),
      init.prompt('licenses', 'MIT'),
      init.prompt('author_name', 'Rob Wood'),
      init.prompt('author_email', 'flatulentdog@hotmail.com'),
      init.prompt('author_url', 'http://rob-wood.net')
    ], function(err, props) {
      // A few additional properties.
      props.jqueryjson = props.name + '.jquery.json';
      props.dependencies = {jquery: props.jquery_version || '>= 1'};
  
      props.keywords = [];
  
      // Files to copy (and process).
      var files = init.filesToCopy(props);
  
      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);
  
      // Actually copy (and process) files.
      init.copyAndProcess(files, props, {noProcess: ['lib/**','resource/**']});
  
      var obj = {
        name: props.name,
        version: props.version,
        licenses: props.licenses,
        npm_test: 'grunt qunit',
        author_name: props.author_name,
        author_url: props.author_url,
        repository: props.repository,
        // TODO: pull from grunt's package.json
        node_version: '>= 5.3.0',
        dependencies: {
          'requirejs': '2.1.22',
          'jquery': '2.2.0',
          'jquery-ui': '1.10.5',
          'bootstrap': '3.3.6'
        },
        devDependencies: {
          "grunt": "^0.4.5",
          "grunt-cli": "^0.1.13",
          "grunt-contrib-clean": "~0.7.0",
          "grunt-contrib-coffee": "^0.13.0",
          "grunt-contrib-concat": "^0.5.1",
          "grunt-contrib-connect": "^0.11.2",
          "grunt-contrib-jshint": "^0.11.3",
          "grunt-contrib-requirejs": "^0.4.4",
          "grunt-contrib-uglify": "^0.9.2",
          "grunt-contrib-watch": "^0.6.1",
          "grunt-prettify": "^0.3.0",
          "grunt-cssbeautifier": "^0.1.1",
          "grunt-jsbeautifier": "^0.2.9",
          "grunt-karma": "^0.12.0",
          "karma": "^0.13.19",
          "karma-firefox-launcher": "^0.1.6",
          "karma-phantomjs-launcher": "^0.2.1",
          "karma-qunit": "^0.1.5",
          "phantomjs": "^1.9.18",
          "qunitjs": "^1.19.0",
          "requirejs": "2.1.16"
        }
      };
  
      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', obj);
      
      //init.writePackageJSON('package.json', {});
  
      // Generate jquery.json file.
      init.writePackageJSON(props.jqueryjson, props, function(pkg, props) {
        // The jQuery site needs the 'bugs' value as a string.
        if ('bugs' in props) { pkg.bugs = props.bugs; }
        return pkg;
      });
  
      // All done!
      done();
    });
  
  };

}());