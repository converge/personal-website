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
    cy.get(':nth-child(1) > input').type(
      `${faker.name.firstName()} ${faker.name.lastName()}`
    )
    cy.get(':nth-child(2) > input').type(
      `${faker.internet.email()}`.toLowerCase()
    )
    cy.get(':nth-child(3) > input').type('Cypress e2e email test')
    cy.get('.textarea-field').type(`${faker.lorem.sentences(5)}`)
    // send form/email
    cy.get('button').click()
    cy.get('.form-sending.sending').should('have.text', 'Sending email...')
    cy.wait(10000)
    cy.get('.form-sending.success').should('have.text', 'Email sent !')
  })
})
