// active IntelliSense
/// <reference types="Cypress" />

describe('API tests', () => {
  it('should retrieve all posts', () => {
    cy.request('/blog/posts')
      .its('status')
      .should('equal', 200)
  })

  it('should return total amount of posts', () => {
    cy.request('/blog/gettotalposts')
      .its('status')
      .should('equal', 200)
  })

  it('should return one post by slug', () => {
    cy.request('/blog/post/?slug=google-analytics-on-reactjs-the-easy-way')
      .its('status')
      .should('equal', 200)
  })

  it('should return one post by id', () => {
    cy.request('/blog/postbyid/?id=5c6760127388863bb925a3ce')
      .its('status')
      .should('equal', 200)
  })
})
