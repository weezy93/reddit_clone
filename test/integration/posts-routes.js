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

  beforeEach(function (done) {
    testUtilities.dropDatabase();
    testSeed.runSeed(done);
  });

  afterEach(function (done) {
    testUtilities.dropDatabase(done);
  });
  // get all
  describe('/GET all posts', function () {

    it('should return all students', function (done) {
      chai.request(server)
      .get('/posts')
      .end(function (err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.status.should.equal('success');
        res.body.data.should.be.a('array');
        res.body.data.length.should.equal(2);
        res.body.data[0].should.have.property('username');
        res.body.data[0].should.have.property('postBody');
        res.body.data[0].should.have.property('image');
        res.body.data[0].should.have.property('votes');
        res.body.data[0].should.have.property('postedAt');
        res.body.data[0].should.have.property('comments');
        res.body.data[0].should.have.property('showComments');
        done();
      });
    });
  });
});
