describe('e2e admin pages', () => {
  it('should load 404 page', () => {
    cy.visit('/some_non_existent_page')
    cy.title().should('equal', '404 - Page Not Found')
  })
})
