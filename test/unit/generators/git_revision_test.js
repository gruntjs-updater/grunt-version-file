/*
 * grunt-version-file
 * https://github.com/cfogelberg/grunt-version-file
 *
 * Copyright (c) 2014 Christo Fogelberg
 * Licensed under the MIT license.
 */
// Allow indirectly-executed (should-executed) function literals to pass jshint IIFE warning:
/*jshint -W068 */
// Allow expressions (...should.be.a.Foo;)
/*jshint -W030 */

"use strict";

describe("GitRevisionGenerator", function() {
  var should = require("should");
  var git_revision = require("../../../lib/generators/git_revision");

  it("specifies a label_value method that returns a then'able object", function() {
    git_revision.label_value.should.be.a.Function;
    git_revision.label_value().should.be.a.Object;
    git_revision.label_value().then.should.be.a.Function;
  });

  it("the then'able object resolves to an object with a label and value", function() {
    git_revision.label_value().then(function(result) {
      result.label.should.not.be.undefined;
      result.label.should.be.a.String;
      result.value.should.not.be.undefined;
    });
  });
});
