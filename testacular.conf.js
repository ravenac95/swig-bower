// Testacular configuration
// Generated on Mon Oct 29 2012 11:25:50 GMT-0400 (EDT)
var fs = require('fs');


// base path, that will be used to resolve files and exclude
basePath = './';


initialFiles = [
  MOCHA,
  MOCHA_ADAPTER,
  'components/chai/chai.js'
];

includeFiles = JSON.parse(fs.readFileSync('includes.json'));

includeFiles = includeFiles.map(function(file) {
  return "components/" + file;
});

// list of files / patterns to load in the browser
filesUnderTest = [
  'swig.configurable.js',
  'tests/*.js'
];

files = [];

files.push.apply(files, initialFiles);
files.push.apply(files, includeFiles);
files.push.apply(files, filesUnderTest);


// list of files to exclude
exclude = [
  '**/*.swp'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['dots'];


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome', 'ChromeCanary', 'Firefox', 'Safari', 'Opera'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

proxies = {
  '/validate': 'http://127.0.0.1:9081',
  '/validate-zip': 'http://127.0.0.1:9081/zip'
};
