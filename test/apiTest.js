require("dotenv").config()
require('mocha')
const app = require('../src/services/server')
const request = require('supertest')

describe('GET /blog/posts', () => {
  it('Should return 10 posts', (done) => {
    request(app)
      .get('/blog/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

describe('GET /blog/gettotalposts', () => {
  it('Should return total amout of posts', (done) => {
    request(app)
      .get('/blog/gettotalposts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

describe('GET /blog/post/:slug', () => {
  it('Should return one post', (done) => {
    request(app)
      .get('/blog/post/?slug=google-analytics-on-reactjs-the-easy-way')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})

describe('GET /blog/postbyid/:id', () => {
  it('Should return one post', (done) => {
    request(app)
      .get('/blog/postbyid/?id=5c6760127388863bb925a3ce')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})
