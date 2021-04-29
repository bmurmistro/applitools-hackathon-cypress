/// <reference types="cypress" />



describe('Visual Validation Applitools', () =>{ 
   
    before(function() {
        cy.visit(Cypress.config('baseUrl'));
        
    });
    beforeEach(function() {
        cy.eyesOpen({
            appName: 'ApplitoolsPalooza - Solution',
            testName: this.currentTest.title,
        })
    })
    afterEach(() => {
        cy.eyesClose()
    }) 

    it('Display Elements of Authentification Page', () => {
        cy.eyesCheckWindow('Login Page')  
    })
    

    it('Login Attempt no username and no password', () =>{
        cy.get("#log-in").click();
        cy.eyesCheckWindow('Login Attempt - no data')
    
    })
    it('Login Attempt Only Username', () => {
        cy.get("#username").type("demo@applitools.com")
        cy.get("#log-in").click()
        cy.eyesCheckWindow('Login Attempt - Username Only')
        cy.get("#username").clear()
    })
    it('Login Attempt Only Password', () => {
        cy.get("#password").type("password")
        cy.get("#log-in").click();
        cy.eyesCheckWindow('Login Attempt - Password Only')
        cy.get("#password").clear()
    })
    it('Login Attempt Success', () => {
        cy.get("#username").type("demo@applitools.com")
        cy.get('#password').type("password")
        cy.get("#log-in").click();
        cy.eyesCheckWindow('Login Attempt - Success')
    })
})
