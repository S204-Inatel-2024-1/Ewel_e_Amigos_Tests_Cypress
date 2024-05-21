describe('Login User', () => {
  it('Entrando sem senha', () => {
    cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    cy.wait(5000) // sem esse wait ele tava bugando.
    cy.get('flt-semantics-placeholder').click({force: true})
    cy.get('#flt-semantic-node-4').click()
    cy.get('#flt-semantic-node-12 > input').type('ahsdkjads')
    cy.get('#flt-semantic-node-15').click()
    cy.get('#flt-semantic-node-21').contains('Você não inseriu todos os dados para login').should('be.visible')
  })

  it('Entrando sem usuário', () => {
    cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    cy.wait(5000) // sem esse wait ele tava bugando.
    cy.get('flt-semantics-placeholder').click({force: true})
    cy.get('#flt-semantic-node-4').click()
    cy.get('#flt-semantic-node-14 > input').type('ahsdkjads')
    cy.get('#flt-semantic-node-15').click()
    cy.get('#flt-semantic-node-21').contains('Você não inseriu todos os dados para login').should('be.visible')  
  })
  it('Usuário invalido', () => {
    cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    cy.wait(5000) // sem esse wait ele tava bugando.
    cy.get('flt-semantics-placeholder').click({force: true})
    cy.get('#flt-semantic-node-4').click()
    cy.get('#flt-semantic-node-12 > input').type('ahsdkjads')
    cy.get('#flt-semantic-node-14 > input').type('admin')
    cy.get('#flt-semantic-node-15').click()
    cy.get('#flt-semantic-node-21').contains('Usuário ou senha inválidos!').should('be.visible')  
  })

  it('Senha invalida', () => {
    cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    cy.wait(5000) // sem esse wait ele tava bugando.
    cy.get('flt-semantics-placeholder').click({force: true})
    cy.get('#flt-semantic-node-4').click()
    cy.get('#flt-semantic-node-12 > input').type('ahsdkjads')
    cy.get('#flt-semantic-node-14 > input').type('admin')
    cy.get('#flt-semantic-node-15').click()
    cy.get('#flt-semantic-node-21').contains('Usuário ou senha inválidos!').should('be.visible')  
  })

  it('Esqueci a senha', () => {
    cy.visit('https://ewel-e-amigos-dev-front-end.vercel.app/')
    cy.wait(5000) // sem esse wait ele tava bugando.
    cy.get('flt-semantics-placeholder').click({force: true})
    cy.get('#flt-semantic-node-4').click()
    cy.get('#flt-semantic-node-16').click()
    cy.get('#flt-semantic-node-19').contains('Redefinir Senha').should('be.visible')
    cy.get('input').type('email.email@email.email')
    cy.get('#flt-semantic-node-22').click()
    cy.get('#flt-semantic-node-27 > input').type('CódigoTotalmenteVálido,Confia!')
    cy.get('#flt-semantic-node-29 > input').type('senhasegura')
    cy.get('#flt-semantic-node-21').contains('Código Inválido!').should('be.visible')  
  })

})

