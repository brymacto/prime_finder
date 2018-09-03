const request = require('supertest');
const app = require('../../app');

function expectBody(body) {
  return (error, response) => {
    if (error) {
      throw new Error(error);
    }
    expect(response.body).toEqual(body);
  };
}

describe('GET /prime_numbers', () => {
  it('respond successfully with json', () => {
    request(app)
      .get('/prime_numbers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
