describe('Testando o aluno', () => {
    it('Entrando no aluno', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-5 > span').click()
      cy.get('#flt-semantic-node-12 > input').type('alvarolacerdaribeiro@gmail.com')
      cy.get('#flt-semantic-node-14 > input').type('848571')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-19').contains('Olá, Aluno.').should('be.visible')
    })

    it('Verificando fases', () => {
        cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
        cy.wait(5000) // sem esse wait ele tava bugando.
        cy.get('flt-semantics-placeholder').click({force: true})
        cy.get('#flt-semantic-node-4 > span').click()
        cy.get('#flt-semantic-node-12 > input').type('alvarolacerdaribeiro@gmail.com')
        cy.get('#flt-semantic-node-14 > input').type('848571')
        cy.get('#flt-semantic-node-15').click()
        cy.wait(10000)
        cy.get('#flt-semantic-node-23').click()
        cy.get('#flt-semantic-node-34 > span').contains('As fases já criadas estão listadas abaixo').should('be.visible')
        cy.get('#flt-semantic-node-41').click()
        cy.get('span').contains('Criar Nova Fase').should('be.visible')
        cy.get('#flt-semantic-node-50 > input').type('fase_teste')
        cy.get('#flt-semantic-node-51 > input').type('2024-06-25')
        cy.get('#flt-semantic-node-53').click()
        cy.get('#flt-semantic-node-53').contains('Criar').should('be.visible')




      })

  })
  