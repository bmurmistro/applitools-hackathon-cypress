/// <reference types="cypress" />



describe('Visual Validation Applitools', () =>{ 
   
    before(function() {
        cy.visit(Cypress.config('baseUrl'));
        
    });
    beforeEach(function() {
        cy.eyesOpen({
            appName: 'Applitools Hackathon',
            testName: this.currentTest.title,
        })
    })
    afterEach(() => {
        cy.eyesClose()
    }) 

    it('Display Elements of Authentification Page', () => {
        // visual Validation
    })
    

    it('Login Attempt no username and no password', () =>{
        cy.get("#log-in").click();
        // visual Validation
    
    })
    it('Login Attempt Only Username', () => {
        cy.get("#username").type("demo@applitools.com")
        cy.get("#log-in").click()
        // visual Validation
        cy.get("#username").clear()
    })
    it('Login Attempt Only Password', () => {
        cy.get("#password").type("password")
        cy.get("#log-in").click();
        // visual Validation
        cy.get("#password").clear()
    })
    it('Login Attempt Success', () => {
        cy.get("#username").type("demo@applitools.com")
        cy.get('#password').type("password")
        cy.get("#log-in").click();
        // visual Validation
    })
})
