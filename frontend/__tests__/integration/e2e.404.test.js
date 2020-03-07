describe('404 pages', () => {
  it('should load 404 page', () => {
    cy.visit('/some_non_existent_page')
    cy.get('h1').should('contain', '404 page')
  })
})
