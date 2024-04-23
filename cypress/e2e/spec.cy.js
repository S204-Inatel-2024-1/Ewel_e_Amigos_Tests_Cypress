describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ewel-e-amigos-front-end.vercel.app/')
    cy.get('flt-semantics-placeholder').click({force: true})
  })
})