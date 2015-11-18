Package.describe({
  name: 'idmontie:humanize',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/idmontie/meteor-humanize',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md'
});

var load = function (api) {
  api.addFiles('humanizers/string-humanizer.js');
  api.addFiles('humanizers/string-truncate.js');
  api.addFiles('humanizers/number-ordinalize.js');
  api.addFiles('humanizers/number-ordinal.js');
  api.addFiles('humanizers/number-romanize.js');
  api.addFiles('humanizers/number-unromanize.js');
  api.addFiles('core/humanize.js');
}

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  load(api);

  api.export('Humanize');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  
  load(api);

  api.addFiles('tests/humanize-number-tests.js');
  api.addFiles('tests/humanize-string-tests.js');
});
