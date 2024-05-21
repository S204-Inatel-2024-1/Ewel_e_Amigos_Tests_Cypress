describe('Login Administrador', () => {
    it('Entrando no admin', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-6').click()
      cy.get('#flt-semantic-node-12 > input').type('admin@admin')
      cy.get('#flt-semantic-node-14 > input').type('123456')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-19').contains('Olá, Filipe.').should('be.visible')
    })

    it('Checando as fases', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-6').click()
      cy.get('#flt-semantic-node-12 > input').type('admin@admin')
      cy.get('#flt-semantic-node-14 > input').type('123456')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-27').click()
      cy.get('#flt-semantic-node-46').contains('As fases já criadas estão listadas abaixo').should('be.visible')
      cy.get('#flt-semantic-node-66').click()
      cy.get('#flt-semantic-node-19').contains('Olá, Filipe.').should('be.visible')
    })

    it('Checando o projeto 1', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-6').click()
      cy.get('#flt-semantic-node-12 > input').type('admin@admin')
      cy.get('#flt-semantic-node-14 > input').type('123456')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-36').click({force: true})
      cy.get('#flt-semantic-node-44 > span').contains('Abaixo, está as informações da equipe X').should('be.visible')
    })

    it('Importar planilha', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-6').click()
      cy.get('#flt-semantic-node-12 > input').type('admin@admin')
      cy.get('#flt-semantic-node-14 > input').type('123456')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-29').click()
      cy.get('#flt-semantic-node-48').contains('Importar planilha')
    })

    it('Cadastrar Manualmente', () => {
      cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
      cy.wait(5000) // sem esse wait ele tava bugando.
      cy.get('flt-semantics-placeholder').click({force: true})
      cy.get('#flt-semantic-node-6').click()
      cy.get('#flt-semantic-node-12 > input').type('admin@admin')
      cy.get('#flt-semantic-node-14 > input').type('123456')
      cy.get('#flt-semantic-node-15').click()
      cy.wait(10000)
      cy.get('#flt-semantic-node-31').click()
      cy.get('#flt-semantic-node-52 > span').contains('Você escolheu inserir os dados manualmente').should('be.visible')
      cy.get('#flt-semantic-node-59').click()
      cy.get('#flt-semantic-node-64 > span').contains('Se a equipe não possui algum integrante, deixar os campos em branco')
    })
    
    
    
  })
  
  