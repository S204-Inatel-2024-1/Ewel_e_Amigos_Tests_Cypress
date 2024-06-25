describe('Login Administrador', () => {
    // it('Entrando no admin', () => {
    //   cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    //   cy.wait(5000) // sem esse wait ele tava bugando.
    //   cy.get('flt-semantics-placeholder').click({force: true})
    //   cy.get('#flt-semantic-node-6').click()
    //   cy.get('#flt-semantic-node-12 > input').type('admin@admin')
    //   cy.get('#flt-semantic-node-14 > input').type('123456')
    //   cy.get('#flt-semantic-node-15').click()
    //   cy.wait(10000)
    //   cy.get('#flt-semantic-node-19').contains('Olá, Filipe.').should('be.visible')
    // })

    // it('Checando as fases', () => {
    //   cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    //   cy.wait(5000) // sem esse wait ele tava bugando.
    //   cy.get('flt-semantics-placeholder').click({force: true})
    //   cy.get('#flt-semantic-node-6').click()
    //   cy.get('#flt-semantic-node-12 > input').type('admin@admin')
    //   cy.get('#flt-semantic-node-14 > input').type('123456')
    //   cy.get('#flt-semantic-node-15').click()
    //   cy.wait(10000)
    //   cy.get('#flt-semantic-node-28').click()
    //   cy.get('#flt-semantic-node-58 > span').contains('As fases já criadas estão listadas abaixo').should('be.visible')
    //   cy.get('#flt-semantic-node-82').click()
    //   cy.get('#flt-semantic-node-19 > span').contains('Olá, Filipe.').should('be.visible')
    // })

    // it('Checando o projeto 1', () => {
    //   cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    //   cy.wait(5000) // sem esse wait ele tava bugando.
    //   cy.get('flt-semantics-placeholder').click({force: true})
    //   cy.get('#flt-semantic-node-6').click()
    //   cy.get('#flt-semantic-node-12 > input').type('admin@admin')
    //   cy.get('#flt-semantic-node-14 > input').type('123456')
    //   cy.get('#flt-semantic-node-15').click()
    //   cy.wait(10000)
    //   cy.get('#flt-semantic-node-40').click()
    //   cy.get('#flt-semantic-node-56 > span').contains('Abaixo, está as informações da equipe X').should('be.visible')
    // })
    
    // it('Importar planilha', () => {
    //   cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    //   cy.wait(5000) // sem esse wait ele tava bugando.
    //   cy.get('flt-semantics-placeholder').click({force: true})
    //   cy.get('#flt-semantic-node-6').click()
    //   cy.get('#flt-semantic-node-12 > input').type('admin@admin')
    //   cy.get('#flt-semantic-node-14 > input').type('123456')
    //   cy.get('#flt-semantic-node-15').click()
    //   cy.wait(10000)
    //   cy.get('#flt-semantic-node-30').click()
    //   cy.get('#flt-semantic-node-56').contains('Importar planilha')
    // })

    it('Cadastrar Manualmente', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-6').click()
      cy.get('#flt-semantic-node-12 > input').type('admin@admin')
      cy.get('#flt-semantic-node-14 > input').type('123456')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-32').click()
      cy.get('#flt-semantic-node-56 > span').contains('Você escolheu inserir os dados manualmente').should('be.visible')
      cy.get('#flt-semantic-node-63').click()
      cy.get('#flt-semantic-node-69 > span').contains('Se a equipe não possui algum integrante, deixar os campos em branco')
    })

  })
  