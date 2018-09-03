const request = require('supertest');
const express = require('express');

const app = express();

describe('GET /user', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/prime_numbers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
