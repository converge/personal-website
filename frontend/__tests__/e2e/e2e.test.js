// active IntelliSense
/// <reference types="Cypress" />
const faker = require('faker')

describe('e2e test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should match title for SEO', () => {
    cy.title().should('include', 'João Vanzuita')
  })

  it('should load first blog post', () => {
    cy.get('.blog-posts > :nth-child(1) > li > a')
  })

  it('should send testing email', () => {
    // fill the form
    cy.get('[name="name"]').type(
      `${faker.name.firstName()} ${faker.name.lastName()}`
    )
    cy.get('[name="email"]').type(
      `${faker.internet.email()}`.toLowerCase()
    )
    cy.get('[name="subject"]').type('Cypress e2e email test')
    cy.get('.textarea-field').type(`${faker.lorem.sentences(5)}`)
    // send form/email
    cy.get('button').click()
  })
})
