var assert = chai.assert;

// For firefox
mocha.setup({ globals: ['getInterface'] });

describe('swigEnvironment', function() {
  var underscore = _.noConflict();

  it('creates a swig environment', function() {
    var swig = swigEnvironment({ underscore: underscore });
    var template = swig.compile("hello, {{ something }}");
    var expectedString = "hello, world";
    var actual = template({ something: "world" });
    assert.equal(actual, expectedString);
  });
});
