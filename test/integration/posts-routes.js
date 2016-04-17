process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed');
var Posts = require('../../src/server/models/posts');

chai.use(chaiHttp);

describe('post routes', function() {
  console.log('here');
  beforeEach(function (done) {
    testUtilities.dropDatabase();
    testSeed.runSeed(done);
  });

  afterEach(function (done) {
    testUtilities.dropDatabase(done);
  });

  describe('tests run', function () {

    it('should run tests', function (done) {
      console.log('running test');
      return true;
      done();
    });
  });
});
