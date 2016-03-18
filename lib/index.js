/**
 * A Metalsmith plugin to add npm modules to the global
 * metadata, e.g. metadata._ = require("lodash")
 */
module.exports = function plugin(packages) {
  packages = packages || {};

  return function(files, metalsmith, done) {
    for (var packageName in packages) {
      metalsmith.metadata()[packageName] = require(packages[packageName]);
    }

    return done();
  };
}