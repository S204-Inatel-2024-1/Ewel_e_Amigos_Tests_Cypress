describe('Testando o professor', () => {
    it('Entrando no professor', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-5 > span').click()
      cy.get('#flt-semantic-node-12 > input').type('alvaro.lucio@ges.inatel.br')
      cy.get('#flt-semantic-node-14 > input').type('250072')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-19').contains('Olá, Orientador.').should('be.visible')
    })

    it('Verificando projeto', () => {
        cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
        cy.wait(5000) // sem esse wait ele tava bugando.
        cy.get('flt-semantics-placeholder').click({force: true})
        cy.get('#flt-semantic-node-5 > span').click()
        cy.get('#flt-semantic-node-12 > input').type('alvaro.lucio@ges.inatel.br')
        cy.get('#flt-semantic-node-14 > input').type('250072')
        cy.get('#flt-semantic-node-15').click()
        cy.wait(10000)
        cy.get('#flt-semantic-node-30').click()
        cy.get('#flt-semantic-node-36 > span').contains('Abaixo, estão as informações das equipes').should('be.visible')
        
      })

  })
  