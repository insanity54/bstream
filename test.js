var mocha = require('mocha');
var supertest = require('supertest');
var app = require('./app');

// check openssl installed
// check ssl keys exist
// check serving on port 33333


describe('server', function() {
    it('should serve test page at /test2.html', function(done) {
	supertest(app)
	    .get('/test2.html')
	    .expect('Content-Type', /html/)
	    .expect(200, done);
    });
});

