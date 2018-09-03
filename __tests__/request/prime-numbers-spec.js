const request = require('supertest');
const app = require('../../app');

describe('GET /prime_numbers', () => {
  it('responds successfully with json', () => {
    request(app)
      .get('/prime_numbers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('when given upper limit n, responds with median of the set of prime numbers less than n', (done) => {
    request(app)
      .get('/prime_numbers')
      .query({ upper_limit: 18 })
      .set('Accept', 'application/json')
      .then((response) => {
        expect(response.body).toEqual({ median: [7] });
      })
      .then(done());
  });

  it('returns multiple medians when applicable', (done) => {
    request(app)
      .get('/prime_numbers')
      .query({ upper_limit: 18 })
      .set('Accept', 'application/json')
      .then((response) => {
        expect(response.body).toEqual({ median: [7] });
      })
      .then(done());
  });
});
