/// <reference types="cypress" />


describe('Log in Github', () => {
    it('Login to Github', () => {
      
      cy.visit('https://github.com/login')

       cy.get('#login_field').type("aadyuta18")
       cy.get('#password').type("@Jakarta134")
       cy.get('.btn').click()
      // cy.get('.logout-form > .dropdown-item').click()
    })
  })