const request = require('supertest');
const app = require('../../app');

describe('GET /user', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/prime_numbers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw new Error(error);
        }
        expect(response.body).toEqual({ foo: 'bar' });
        done();
      });
  });
});
