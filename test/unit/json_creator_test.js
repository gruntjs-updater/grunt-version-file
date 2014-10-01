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

describe("JsonCreator", function() {
  var should = require("should");
  var JsonCreator = require("../../lib/json_creator");

  var VALID_STUB_OBJECT_STORE = {};

  it("has a create_string method that returns a string", function() {
    var jc = new JsonCreator();
    jc.create_string.should.be.a.Function;
    jc.create_string(VALID_STUB_OBJECT_STORE).should.be.a.String;
  });

  it("has a create_string method that requires an object_store object arg", function() {
    var jc = new JsonCreator();
    (function() {
      jc.create_string();
    }).should.throw();
    (function() {
      jc.create_string("foo");
    }).should.throw();
  });

  it.skip("has a create_json_string method that works as expected", function() {
    // TODO implement using mocks in a way that doesn't depend on the actual day or version
  });
});
